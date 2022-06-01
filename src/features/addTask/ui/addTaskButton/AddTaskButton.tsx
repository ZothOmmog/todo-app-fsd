import React from 'react';

import { addTaskFx } from 'entities/task/model';

export const AddTaskButton: React.FC = () => {
  return <button onClick={handleClick}>AddTaskButton</button>;
};

const handleClick = addTaskFx.prepend(() => ({
  description: 'task description',
  isCompleted: false,
  title: 'task title',
}));
