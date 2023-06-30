import * as Yup from 'yup';

export const useLoginSchema = () =>
  Yup.object().shape({
    email: Yup.string().email('invalid_email').required('email_is_required'),
    password: Yup.string().required('password_is_required'),
  });

export const useStudentSchema = () =>
  Yup.object().shape({
    firstName: Yup.string().required('first_name_is_required'),
    lastName: Yup.string().required('last_name_is_required'),
    email: Yup.string().email('invalid_email').required('email_is_required'),
    phone: Yup.string().required('phone_is_required'),
    username: Yup.string().required('username_is_required'),
    companyName: Yup.string().required('company_name_is_required'),
  });
