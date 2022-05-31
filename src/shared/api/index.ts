export type TaskShort = {
  id: number;
  title: string;
  completed: boolean;
};

export type TaskDetails = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

export const getTaskList = async () => {
  await wait();

  return [
    { id: 1, title: "Задача 1", completed: false },
    { id: 2, title: "Задача 2", completed: true },
    { id: 3, title: "Задача 3", completed: false },
  ];
};

export const getTaskById = async (id: number) => {
  await wait();

  return {
    id: id,
    title: `Задача ${id}`,
    description: `Детальное описание для задачи ${id}`,
    completed: false,
  };
};

export const toggleTask = async (id: number) => {
  await wait();
};

const wait = () => new Promise((r) => setTimeout(r, 1000));
