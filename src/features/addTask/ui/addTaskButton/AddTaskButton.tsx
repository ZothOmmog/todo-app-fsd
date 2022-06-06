import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useStore } from 'effector-react';
import React from 'react';

import { addTaskModel } from 'features/addTask/model';

import { taskModel } from 'entities/task';

import { AddTaskModal } from '../addTaskModal';

export const AddTaskButton: React.FC = () => {
  const isPending = useStore(taskModel.$isPengindTaskShortList);

  const handleShow = React.useCallback(() => addTaskModel.modal.show(), []);

  return (
    <>
      <Button
        icon={<PlusOutlined />}
        loading={isPending}
        onClick={handleShow}
        type="primary"
      />
      <AddTaskModal />
    </>
  );
};
