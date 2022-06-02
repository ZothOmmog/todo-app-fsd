import { Space } from 'antd';
import { useStore } from 'effector-react';
import React from 'react';

import { ToggleTaskShort } from 'features/toggleTask';

import { TaskRow, taskModel } from 'entities/task';

export const TaskList: React.FC = () => {
  const ids = useStore(taskModel.$taskShortIds);

  let list: React.ReactNode = 'Список задач не был загружен';

  if (ids !== null) {
    list = ids.map((id) => (
      <TaskRow Actions={ToggleTaskShort} key={id} id={id} />
    ));
  }

  return <Space direction="vertical">{list}</Space>;
};
