export type TaskShort = {
  id: string;
  title: string;
  isCompleted: boolean;
};

export type TaskDetails = TaskShort & {
  description: string;
};
