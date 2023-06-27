import {Center, Box, Text} from 'native-base';
import React, {FC} from 'react';
import {useLocalization} from '../../contexts/LocalizationContext';

interface Props {
  size?: 'small' | 'large';
}
const AppTitle: FC<Props> = ({size = 'small'}) => {
  const {strings} = useLocalization();
  return (
    <Center paddingX={'s'}>
      <Box
        paddingX={'s'}
        marginBottom={'s'}
        borderLeftWidth={2}
        borderLeftColor={'orange.dark'}>
        <Text
          fontSize={size === 'small' ? 20 : 30}
          fontWeight="bold"
          textTransform={'uppercase'}>
          {strings.appTitle}
        </Text>
      </Box>
    </Center>
  );
};

export default AppTitle;
