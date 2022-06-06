import { Input } from 'antd';
import { FieldInputProps, useField } from 'formik';
import React from 'react';

import { FloatLabel } from '../floatLabel';

type TextAreaFormikProps = Omit<
  React.ComponentProps<typeof Input.TextArea>,
  keyof FieldInputProps<unknown>
> & {
  name: string;
  label: string;
};

export const TextAreaFormik: React.FC<TextAreaFormikProps> = (props) => {
  const { label, ...otherProps } = props;
  const [inputProps] = useField(props.name);

  return (
    <FloatLabel label={label} value={inputProps.value}>
      <Input.TextArea {...otherProps} {...inputProps} />
    </FloatLabel>
  );
};
