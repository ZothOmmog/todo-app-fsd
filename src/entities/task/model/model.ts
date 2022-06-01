import { combine, createEffect, createStore, forward, sample } from 'effector';

import { taskApi } from 'shared/api';

export const getTaskListFx = createEffect(async () => {
  return taskApi.api.getTaskShortList();
});

export const addTaskFx = createEffect(
  async (task: Omit<taskApi.types.TaskDetails, 'id'>) => {
    return taskApi.api.addTask(task);
  },
);

export const toggleTaskFx = createEffect(async (id: string) => {
  return taskApi.api.toggleTask(id);
});

export const $taskShortList = createStore<taskApi.types.TaskShort[] | null>(
  null,
);
export const $isLoadingTaskShortList = combine(
  $taskShortList,
  getTaskListFx.pending,
  (list, isPending) => (list === null && isPending) || list === null,
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
