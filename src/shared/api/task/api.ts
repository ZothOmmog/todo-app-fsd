import { LsKey } from '../config';
import { getLsValue, setLsValue, wait } from '../lib';

import { incorrectTaskIdError } from './config';
import * as mappers from './mappers';
import { TaskDetails, TaskShort } from './types';

export const getTaskDetailsList = async (): Promise<TaskDetails[]> => {
  await wait();

  const tasks = getLsValue<TaskDetails[]>(LsKey.tasks);

  if (tasks === undefined) return [];

  return tasks;
};

export const getTaskShortList = async (): Promise<TaskShort[]> => {
  const tasks = await getTaskDetailsList();

  return mappers.mapResTaskShortList(tasks);
};

export const getTaskById = async (id: number): Promise<TaskDetails> => {
  const tasks = await getTaskDetailsList();
  const task = tasks.find((task) => task.id === id);

  if (task === undefined) throw new Error(incorrectTaskIdError);

  return task;
};

export const toggleTask = async (id: number) => {
  const tasks = await getTaskDetailsList();
  const task = await getTaskById(id);

  setLsValue(LsKey.tasks, mappers.mapReqToggleTask(task, tasks));
};
