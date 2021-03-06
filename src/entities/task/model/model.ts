import { combine, createEffect, createStore, forward, sample } from 'effector';

import { taskApi } from 'shared/api';

export const getTaskListFx = createEffect(async () => {
  return taskApi.api.getTaskShortList();
});

export const addTaskFx = createEffect(
  async (values: Pick<taskApi.types.TaskDetails, 'description' | 'title'>) => {
    return taskApi.api.addTask({
      ...values,
      dateTime: new Date().toISOString(),
      isCompleted: false,
    });
  },
);

export const toggleTaskFx = createEffect(async (id: string) => {
  return taskApi.api.toggleTask(id);
});

export const $taskShortList = createStore<taskApi.types.TaskShort[] | null>(
  null,
);
export const $isReadyTaskShortList = $taskShortList.map(
  (list) => list !== null,
);
export const $isPengindTaskShortList = combine(
  getTaskListFx.pending,
  toggleTaskFx.pending,
  addTaskFx.pending,
  (...pendings) => pendings.some(Boolean),
);
export const $taskShortIds = $taskShortList.map(
  (list) => list?.map((task) => task.id) ?? null,
);
export const $taskShortMap = $taskShortList.map((list) => {
  return (
    list?.reduce((acc, item) => {
      acc[item.id] = item;

      return acc;
    }, {} as Record<string, taskApi.types.TaskShort>) ?? null
  );
});

sample({
  source: getTaskListFx.doneData,
  target: $taskShortList,
});

forward({
  from: [addTaskFx.done, toggleTaskFx.done],
  to: getTaskListFx,
});
