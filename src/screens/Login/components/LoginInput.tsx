import React, {ChangeEvent, FC} from 'react';
import {Box, Input, VStack, Text} from 'native-base';
import ShakingBox from '../../../components/shared/ShakingBox';
import {useLocalization} from '../../../contexts/LocalizationContext';

interface Props {
  isButtonPressed: boolean;
  setIsButtonPressed: React.Dispatch<React.SetStateAction<boolean>>;
  errors: string | undefined;
  value: string;
  placeholder: string;
  handleChange: (e: string | ChangeEvent<any>) => void;
}
const LoginInput: FC<Props> = props => {
  const {
    isButtonPressed,
    setIsButtonPressed,
    errors,
    value,
    placeholder,
    handleChange,
  } = props;
  const {strings} = useLocalization();
  return (
    <VStack>
      <ShakingBox
        isButtonPressed={isButtonPressed}
        setIsButtonPressed={setIsButtonPressed}
        errors={!!errors || value === ''}>
        <Input
          autoCapitalize="none"
          placeholder={placeholder}
          size="xl"
          height={12}
          onChangeText={handleChange}
          value={value}
        />
      </ShakingBox>
      <Box>
        <Text color={'error.600'} textAlign={'right'}>
          {strings[errors || '']}
        </Text>
      </Box>
    </VStack>
  );
};

export default LoginInput;
