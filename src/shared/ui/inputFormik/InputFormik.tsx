import { Input, InputProps } from 'antd';
import { FieldInputProps, useField } from 'formik';
import React from 'react';

import { FloatLabel } from '../floatLabel';

type InputFormikProps = Omit<InputProps, keyof FieldInputProps<unknown>> & {
  name: string;
  label: string;
};

export const InputFormik: React.FC<InputFormikProps> = (props) => {
  const { label, ...otherProps } = props;
  const [inputProps] = useField(props.name);

  return (
    <FloatLabel label={label} value={inputProps.value}>
      <Input {...otherProps} {...inputProps} />
    </FloatLabel>
  );
};
