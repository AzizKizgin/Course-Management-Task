import {Text} from 'native-base';
import React from 'react';
import {useLocalization} from '../../../contexts/LocalizationContext';

const ForgotPasswordText = () => {
  const {strings} = useLocalization();
  return (
    <Text fontSize="sm" textAlign="center">
      {strings.forgotPassword}
      <Text color={'orange.dark'} underline>
        {strings.resetPassword}
      </Text>
    </Text>
  );
};

export default ForgotPasswordText;
