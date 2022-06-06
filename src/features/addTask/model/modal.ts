import { createEvent, createStore, sample } from 'effector';

import { taskModel } from 'entities/task';

export const show = createEvent();
export const hide = createEvent();

export const $isVisible = createStore(false);

sample({
  source: show,
  fn: () => true,
  target: $isVisible,
});

sample({
  source: hide,
  fn: () => false,
  target: $isVisible,
});

sample({
  source: taskModel.addTaskFx.done,
  target: hide,
});
