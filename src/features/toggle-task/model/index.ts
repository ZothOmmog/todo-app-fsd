import { createEffect, createEvent, sample } from "effector";
import * as api from "shared/api";

const toggleTaskFx = createEffect(async (id: number) => {
  return api.toggleTask(id);
});

export const toggleTask = createEvent<number>();

sample({
  source: toggleTask,
  filter: toggleTaskFx.pending,
  target: toggleTaskFx,
});
