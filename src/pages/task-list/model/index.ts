import { createEvent, sample } from "effector";
import { getTasksListFx } from "entities/task/model";

export const getTasksList = createEvent();

sample({
  source: getTasksList,
  target: getTasksListFx,
});
