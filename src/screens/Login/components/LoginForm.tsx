import {Formik} from 'formik';
import {Button, Input, Text, VStack} from 'native-base';
import React, {useState} from 'react';
import {useLoginSchema} from '../../../config/validation';
import {useLocalization} from '../../../contexts/LocalizationContext';
import ShakingBox from '../../../components/shared/ShakingBox';
import LoginInput from './LoginInput';
import {useUser} from '../../../contexts/UserContext';

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
          <LoginInput
            isButtonPressed={isButtonPressed}
            setIsButtonPressed={setIsButtonPressed}
            errors={errors.email}
            value={values.email}
            placeholder={'Email'}
            handleChange={handleChange('email')}
          />
          <LoginInput
            isButtonPressed={isButtonPressed}
            setIsButtonPressed={setIsButtonPressed}
            errors={errors.password}
            value={values.password}
            placeholder={'Password'}
            handleChange={handleChange('password')}
          />
          <Button
            borderRadius={10}
            alignItems={'center'}
            backgroundColor={'orange.dark'}
            onPress={() => {
              setIsButtonPressed(true);
              handleSubmit();
            }}>
            <Text
              color={'white'}
              fontWeight={'bold'}
              fontSize={16}
              textTransform={'capitalize'}>
              {strings.signIn}
            </Text>
          </Button>
        </VStack>
      )}
    </Formik>
  );
};

export default LoginForm;
