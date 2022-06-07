import * as Yup from 'yup';

Yup.setLocale({
  mixed: {
    required: 'Обязательно',
  },
  string: {
    // eslint-disable-next-line no-template-curly-in-string
    max: 'Максимум ${max} символов',
  },
});
