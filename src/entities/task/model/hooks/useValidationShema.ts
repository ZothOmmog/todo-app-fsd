import * as Yup from 'yup';

export const useValidationShema = () => {
  return Yup.object({
    description: Yup.string().required().max(500),
    title: Yup.string().required().max(255),
  });
};
