import { createEffect, createStore, sample } from "effector";
import { getTaskById, getTaskList } from "shared/api";

export const idleTaskId = -1;

export const getTasksListFx = createEffect(async () => getTaskList());
export const getTaskByIdFx = createEffect(async (id: number) =>
  getTaskById(id)
);

export const $tasks = createStore([
  { id: idleTaskId, title: "", completed: false },
]);

export const $taskDetails = createStore({
  id: idleTaskId,
  title: "",
  description: "",
  completed: false,
});

sample({
  source: getTasksListFx.doneData,
  target: $tasks,
});

sample({
  source: getTaskByIdFx.doneData,
  target: $taskDetails,
});
