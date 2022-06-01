import { TaskDetails, TaskShort } from './types';

export const mapResTaskShortList = (tasks: TaskDetails[]): TaskShort[] => {
  return tasks.map((task) => ({
    id: task.id,
    isCompleted: task.isCompleted,
    title: task.title,
  }));
};

export const mapReqToggleTask = (
  task: TaskDetails,
  tasks: TaskDetails[],
): TaskDetails[] => {
  return [
    ...tasks.filter(({ id }) => id !== task.id),
    { ...task, isCompleted: !task.isCompleted },
  ];
};
