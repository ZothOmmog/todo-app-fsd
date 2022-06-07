import { Input } from 'antd';
import { ErrorMessage, FieldInputProps, useField } from 'formik';
import React from 'react';

import { FloatLabel } from '../floatLabel';
import { TextDanger } from '../textDanger';

type TextAreaFormikProps = Omit<
  React.ComponentProps<typeof Input.TextArea>,
  keyof FieldInputProps<unknown>
> & {
  name: string;
  label: string;
  isRequired?: boolean;
};

export const TextAreaFormik: React.FC<TextAreaFormikProps> = (props) => {
  const { label, isRequired, ...otherProps } = props;
  const [inputProps, { touched, error }] = useField(props.name);
  const status = touched && error ? 'error' : undefined;

  return (
    <FloatLabel
      status={status}
      label={label}
      value={inputProps.value}
      isRequired={isRequired}
    >
      <Input.TextArea status={status} {...otherProps} {...inputProps} />
      <ErrorMessage name={inputProps.name} component={TextDanger} />
    </FloatLabel>
  );
};
