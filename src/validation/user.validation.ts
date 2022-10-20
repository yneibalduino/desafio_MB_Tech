import * as yup from 'yup';

export const userValidationSchema = yup.object().shape({
  userName: yup
    .string()
    .min(3, 'O nome deve conter ao menos 3 caracteres.')
    .required(),
  userEmail: yup.string().email('Digite um email valido').required(),
});
