import { Card, Space } from 'antd';
import cn from 'classnames';
import { useStore } from 'effector-react';
import React from 'react';

import { ToggleTaskShort } from 'features/toggleTask';

import { TaskRow, taskModel } from 'entities/task';

import style from './taskList.module.scss';

type TaskListProps = { className?: string };

export const TaskList: React.FC<TaskListProps> = (props) => {
  const { className } = props;
  const ids = useStore(taskModel.$taskShortIds);

  let list: React.ReactNode = 'Список задач не был загружен';

  if (ids !== null) {
    list = ids.map((id) => (
      <TaskRow Actions={ToggleTaskShort} key={id} id={id} />
    ));
  }

  return (
    <Card className={cn(style.root, className)}>
      <Space className={style.space} direction="vertical">
        {list}
      </Space>
    </Card>
  );
};
