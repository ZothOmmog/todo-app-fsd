import { useGate, useStore } from 'effector-react';
import React from 'react';

import { AddTaskButton } from 'features/addTask';

import { TaskListLoading, taskModel } from 'entities/task';

import { TaskListPageGate } from '../../model';
import { TaskList } from '../taskList';

export const TaskListPage: React.FC = () => {
  useGate(TaskListPageGate);
  const isReady = useStore(taskModel.$isReadyTaskShortList);

  return (
    <div>
      {isReady ? (
        <>
          <TaskList />
          <AddTaskButton />
        </>
      ) : (
        <TaskListLoading />
      )}
    </div>
  );
};
