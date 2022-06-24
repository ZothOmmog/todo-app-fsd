import { Form, Formik } from 'formik';
import React from 'react';

import { InputFormik, TextAreaFormik } from 'shared/ui';

import { addTaskFx, hooks } from '../../model';

type TaskFormProps = React.ComponentProps<typeof Formik<FormValues>>;

export const TaskForm: React.FC<TaskFormProps> = (props) => {
  const validationSchema = hooks.useValidationShema();

  return (
    <Formik<FormValues> validationSchema={validationSchema} {...props}>
      <Form>
        <InputFormik isRequired label="Название" name="title" />
        <TextAreaFormik isRequired name="description" label="Описание" />
      </Form>
    </Formik>
  );
};

type FormValues = Parameters<typeof addTaskFx>[0];
