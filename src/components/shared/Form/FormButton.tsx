import {Button, Text} from 'native-base';
import React, {FC} from 'react';

interface FormButtonProps {
  setIsButtonPressed: React.Dispatch<React.SetStateAction<boolean>>;
  handleSubmit: () => void;
  label: string;
}
const FormButton: FC<FormButtonProps> = props => {
  const {setIsButtonPressed, handleSubmit, label} = props;
  return (
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
        {label}
      </Text>
    </Button>
  );
};

export default FormButton;
