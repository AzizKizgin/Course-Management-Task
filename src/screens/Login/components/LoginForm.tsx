import {Formik} from 'formik';
import {Button, Input, Text, VStack} from 'native-base';
import React, {useState} from 'react';
import {useLoginSchema} from '../../../config/validation';
import {useLocalization} from '../../../contexts/LocalizationContext';
import {useUser} from '../../../contexts/UserContext';
import FormInput from '../../../components/shared/Form/FormInput';
import FormButton from '../../../components/shared/Form/FormButton';

const LoginForm = () => {
  const {strings} = useLocalization();
  const {login} = useUser();
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  return (
    <Formik
      initialValues={{email: '', password: ''}}
      validationSchema={useLoginSchema}
      onSubmit={values => {
        login();
      }}>
      {({handleChange, handleBlur, handleSubmit, values, errors}) => (
        <VStack space={2}>
          <FormInput
            isButtonPressed={isButtonPressed}
            setIsButtonPressed={setIsButtonPressed}
            errors={errors.email}
            value={values.email}
            placeholder={'Email'}
            handleChange={handleChange('email')}
          />
          <FormInput
            isButtonPressed={isButtonPressed}
            setIsButtonPressed={setIsButtonPressed}
            errors={errors.password}
            value={values.password}
            placeholder={'Password'}
            handleChange={handleChange('password')}
          />
          <FormButton
            setIsButtonPressed={setIsButtonPressed}
            handleSubmit={handleSubmit}
            label={strings.signIn}
          />
        </VStack>
      )}
    </Formik>
  );
};

export default LoginForm;
