import { FormikProps, FormikValues } from 'formik';
import React from 'react';

export const useRefFormik = <T = FormikValues>() => {
  return React.useRef<FormikProps<T>>(null);
};
