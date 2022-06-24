import { Modal } from 'antd';
import { useStore } from 'effector-react';
import React from 'react';

import { TaskForm, taskModel } from 'entities/task';

import { initialValues } from '../../config';
import { addTaskHooks, addTaskModel } from '../../model';

export const AddTaskModal: React.FC = () => {
  const isVisible = useStore(addTaskModel.modal.$isVisible);
  const formikCtx = addTaskHooks.useFormikOutside<FormValues>();

  return (
    <Modal
      title="Добавление задачи"
      visible={isVisible}
      onCancel={handleClose}
      afterClose={formikCtx.resetForm}
      okText="Добавить"
      cancelText="Отмена"
      onOk={formikCtx.submitForm}
      okButtonProps={{
        loading: formikCtx.isSubmitting,
        disabled: !formikCtx.isDirty,
      }}
    >
      <TaskForm
        initialValues={initialValues}
        onSubmit={taskModel.addTaskFx}
        innerRef={formikCtx.innerRef}
      />
    </Modal>
  );
};

const handleClose = () => addTaskModel.modal.hide();

type FormValues = React.ComponentProps<typeof TaskForm>['initialValues'];
