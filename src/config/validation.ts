import * as Yup from 'yup';

export const useLoginSchema = () =>
  Yup.object().shape({
    email: Yup.string().email('invalid_email').required('email_is_required'),
    password: Yup.string().required('password_is_required'),
  });
