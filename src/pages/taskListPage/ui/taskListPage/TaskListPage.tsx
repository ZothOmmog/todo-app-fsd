import { useGate, useStore } from 'effector-react';
import React from 'react';

import { TaskListLoading, taskModel } from 'entities/task';

import { TaskListPageGate } from '../../model';
import { TaskList } from '../taskList';

export const TaskListPage: React.FC = () => {
  useGate(TaskListPageGate);
  const isLoaging = useStore(taskModel.$isLoadingTaskShortList);

  return <div>{isLoaging ? <TaskListLoading /> : <TaskList />}</div>;
};
