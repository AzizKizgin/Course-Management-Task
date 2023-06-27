import * as Yup from 'yup';

export const useLoginSchema = (strings: any) =>
  Yup.object().shape({
    email: Yup.string()
      .email(strings.invalid_email)
      .required(strings.email_is_required),
    password: Yup.string().required(strings.password_is_required),
  });
