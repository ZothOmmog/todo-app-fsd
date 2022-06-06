import { Modal } from 'antd';
import { useStore } from 'effector-react';
import { ErrorMessage, Form, Formik, FormikProps } from 'formik';
import React from 'react';

import { taskModel } from 'entities/task';

import { InputFormik, TextAreaFormik, TextDanger } from 'shared/ui';

import { initialValues } from '../../config';
import { addTaskModel } from '../../model';

let resetFormPrev = () => {};

export const AddTaskModal: React.FC = () => {
  const isVisible = useStore(addTaskModel.modal.$isVisible);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isDirty, setIsDirty] = React.useState(false);
  const [resetForm, setResetForm] = React.useState<(() => void) | undefined>();
  const [submitForm, setSubmitForm] = React.useState<
    (() => void) | undefined
  >();

  const handleClose = React.useCallback(() => addTaskModel.modal.hide(), []);

  const okButtonProps = React.useMemo(
    () => ({
      loading: isSubmitting,
      disabled: !isDirty,
    }),
    [isSubmitting, isDirty],
  );

  const innerRef = React.useCallback((elem: FormikProps<FormValues> | null) => {
    if (!elem) return;
    setIsSubmitting(elem.isSubmitting);
    setIsDirty(elem.dirty);

    setResetForm((prev) => prev ?? elem.resetForm);
    setSubmitForm((prev) => prev ?? elem.submitForm);
  }, []);

  return (
    <Modal
      title="Добавление задачи"
      visible={isVisible}
      onCancel={handleClose}
      afterClose={resetForm}
      onOk={submitForm}
      okButtonProps={okButtonProps}
    >
      <Formik<FormValues>
        initialValues={initialValues}
        onSubmit={taskModel.addTaskFx}
        innerRef={innerRef}
      >
        <Form>
          <InputFormik label="Название" name="title" />
          <ErrorMessage name="title" component={TextDanger} />
          <TextAreaFormik name="description" label="Описание" />
          <ErrorMessage name="title" component={TextDanger} />
        </Form>
      </Formik>
    </Modal>
  );
};

type FormValues = Parameters<typeof taskModel.addTaskFx>[0];
