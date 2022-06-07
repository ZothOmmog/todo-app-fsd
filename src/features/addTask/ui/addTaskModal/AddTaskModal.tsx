import { Modal } from 'antd';
import { useStore } from 'effector-react';
import { Form, Formik } from 'formik';
import React from 'react';

import { taskModel } from 'entities/task';

import { InputFormik, TextAreaFormik } from 'shared/ui';

import { initialValues } from '../../config';
import { addTaskHooks, addTaskModel } from '../../model';

export const AddTaskModal: React.FC = () => {
  const isVisible = useStore(addTaskModel.modal.$isVisible);
  const formikCtx = addTaskHooks.useFormikOutside<FormValues>();
  const validationShema = addTaskHooks.useValidationShema();

  const handleClose = React.useCallback(() => addTaskModel.modal.hide(), []);

  const okButtonProps = React.useMemo(
    () => ({
      loading: formikCtx.isSubmitting,
      disabled: !formikCtx.isDirty,
    }),
    [formikCtx.isDirty, formikCtx.isSubmitting],
  );

  return (
    <Modal
      title="Добавление задачи"
      visible={isVisible}
      onCancel={handleClose}
      afterClose={formikCtx.resetForm}
      okText="Добавить"
      cancelText="Отмена"
      onOk={formikCtx.submitForm}
      okButtonProps={okButtonProps}
    >
      <Formik<FormValues>
        initialValues={initialValues}
        onSubmit={taskModel.addTaskFx}
        innerRef={formikCtx.innerRef}
        validationSchema={validationShema}
      >
        <Form>
          <InputFormik isRequired label="Название" name="title" />
          <TextAreaFormik isRequired name="description" label="Описание" />
        </Form>
      </Formik>
    </Modal>
  );
};

type FormValues = Parameters<typeof taskModel.addTaskFx>[0];
