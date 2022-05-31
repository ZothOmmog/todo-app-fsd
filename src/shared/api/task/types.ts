export type TaskShort = {
  id: number;
  title: string;
  isCompleted: boolean;
};

export type TaskDetails = TaskShort & {
  description: string;
};
