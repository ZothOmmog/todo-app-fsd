export type TaskShort = {
  id: string;
  title: string;
  dateTime: string;
  isCompleted: boolean;
};

export type TaskDetails = TaskShort & {
  description: string;
};
