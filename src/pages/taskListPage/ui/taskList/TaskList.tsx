import { useStore } from 'effector-react';
import React from 'react';

import { TaskRow, taskModel } from 'entities/task';

export const TaskList: React.FC = () => {
  const ids = useStore(taskModel.$taskShortIds);

  let list: React.ReactNode = 'Список задач не был загружен';

  if (ids !== null) {
    list = ids.map((id) => <TaskRow key={id} id={id} />);
  }

  return <div>{list}</div>;
};
