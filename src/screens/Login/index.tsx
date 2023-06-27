import {
  Box,
  Button,
  Card,
  Center,
  HStack,
  Input,
  Text,
  VStack,
} from 'native-base';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useLocalization} from '../../contexts/LocalizationContext';
import LoginForm from './components/LoginForm';
import ForgotPasswordText from './components/ForgotPasswordText';
import AppTitle from '../../components/shared/AppTitle';

const Login = () => {
  const {strings} = useLocalization();
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
        </VStack>
      </Card>
    </Box>
  );
};

export default Login;
