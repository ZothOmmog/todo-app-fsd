import { Store } from 'effector';
import { useList } from 'effector-react';
import React from 'react';

import { TaskRow, taskModel } from 'entities/task';

import { taskApi } from 'shared/api';

export const TaskList: React.FC = () => {
  return useList(taskModel.$taskShortList as Store<taskApi.types.TaskShort[]>, {
    fn: (task) => <TaskRow title={task.title} />,
    getKey: (task) => task.id,
  });
};
