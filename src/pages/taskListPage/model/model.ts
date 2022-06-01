import { sample } from 'effector';
import { createGate } from 'effector-react';

import { taskModel } from 'entities/task';

export const TaskListPageGate = createGate();

sample({
  source: TaskListPageGate.open,
  target: taskModel.getTaskListFx,
});
