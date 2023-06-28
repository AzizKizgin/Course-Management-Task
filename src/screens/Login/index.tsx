import {Box, Card, VStack} from 'native-base';
import React from 'react';
import LoginForm from './components/LoginForm';
import ForgotPasswordText from './components/ForgotPasswordText';
import AppTitle from '../../components/shared/AppTitle';
import LanguagePicker from '../../components/Drawer/LanguagePicker';

const Login = () => {
  return (
    <Box
      flex={1}
      bg={{
        linearGradient: {
          colors: ['orange.light', 'orange.dark'],
          start: [0, 1],
          end: [0, 0],
        },
      }}
      justifyContent="center"
      alignItems="center">
      <Card
        bg="white"
        p={6}
        borderRadius={10}
        width="90%"
        justifyContent="center">
        <VStack justifyContent="center" space={'5'}>
          <AppTitle />
          <LoginForm />
          <ForgotPasswordText />
          <LanguagePicker />
        </VStack>
      </Card>
    </Box>
  );
};

export default Login;
