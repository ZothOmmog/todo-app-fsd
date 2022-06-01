import { combine, createEffect, createStore, sample } from 'effector';

import { taskApi } from 'shared/api';

export const getTaskListFx = createEffect(async () => {
  return taskApi.api.getTaskShortList();
});

export const addTaskFx = createEffect(
  async (task: Omit<taskApi.types.TaskDetails, 'id'>) => {
    return taskApi.api.addTask(task);
  },
);

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

sample({
  source: getTaskListFx.doneData,
  target: $taskShortList,
});

sample({
  source: addTaskFx.done,
  target: getTaskListFx,
});
