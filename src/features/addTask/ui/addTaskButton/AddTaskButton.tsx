import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useStore } from 'effector-react';
import React from 'react';

import { taskModel } from 'entities/task';
import { addTaskFx } from 'entities/task/model';

export const AddTaskButton: React.FC = () => {
  const isPending = useStore(taskModel.$isPengindTaskShortList);

  return (
    <Button
      icon={<PlusOutlined />}
      loading={isPending}
      onClick={handleClick}
      type="primary"
    />
  );
};

const handleClick = addTaskFx.prepend(() => ({
  description: 'task description',
  isCompleted: false,
  dateTime: new Date().toISOString(),
  title: 'task title',
}));
