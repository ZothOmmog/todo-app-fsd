import { combine, createEffect, createStore, sample } from 'effector';

import { taskApi } from 'shared/api';

export const getTaskListFx = createEffect(async () => {
  return taskApi.api.getTaskShortList();
});

export const $taskShortList = createStore<taskApi.types.TaskShort[] | null>(
  null,
);
export const $isLoadingTaskShortList = combine(
  $taskShortList,
  getTaskListFx.pending,
  (list, isPending) => list === null || isPending,
);

sample({
  source: getTaskListFx.doneData,
  target: $taskShortList,
});
