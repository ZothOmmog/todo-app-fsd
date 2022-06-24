import { Input, InputProps } from 'antd';
import { ErrorMessage, useField } from 'formik';
import React from 'react';

import { FloatLabel } from '../floatLabel';
import { TextDanger } from '../textDanger';

type InputFormikProps = InputProps & {
  name: string;
  label: string;
  isRequired?: boolean;
};

export const InputFormik: React.FC<InputFormikProps> = (props) => {
  const { label, isRequired, ...otherProps } = props;
  const [inputProps, { touched, error }] = useField(props.name);
  const status = touched && error ? 'error' : undefined;

  return (
    <FloatLabel
      status={status}
      label={label}
      value={inputProps.value}
      isRequired={isRequired}
      isDisabled={otherProps.disabled}
    >
      <Input status={status} {...otherProps} {...inputProps} />
      <ErrorMessage name={inputProps.name} component={TextDanger} />
    </FloatLabel>
  );
};
