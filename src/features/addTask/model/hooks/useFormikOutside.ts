import { FormikProps } from 'formik';
import React from 'react';

export const useFormikOutside = <FProps = unknown>() => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isDirty, setIsDirty] = React.useState(false);
  const [resetForm, setResetForm] = React.useState<(() => void) | undefined>();
  const [submitForm, setSubmitForm] = React.useState<
    (() => void) | undefined
  >();

  const innerRef = React.useCallback((elem: FormikProps<FProps> | null) => {
    if (!elem) return;
    setIsSubmitting(elem.isSubmitting);
    setIsDirty(elem.dirty);

    setResetForm((prev) => prev ?? elem.resetForm);
    setSubmitForm((prev) => prev ?? elem.submitForm);
  }, []);

  return React.useMemo(
    () => ({
      innerRef,
      isSubmitting,
      isDirty,
      resetForm,
      submitForm,
    }),
    [innerRef, isDirty, isSubmitting, resetForm, submitForm],
  );
};
