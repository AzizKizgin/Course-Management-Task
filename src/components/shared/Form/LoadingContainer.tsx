import {Box, Spinner} from 'native-base';
import React, {FC, ReactNode} from 'react';
import {ActivityIndicator} from 'react-native';
import theme from '../../../config/theme';

interface Props {
  children: ReactNode;
  isLoading: boolean;
}
const LoadingContainer: FC<Props> = ({isLoading, children}) => {
  return (
    <Box flex={1} backgroundColor={'white'}>
      {isLoading ? (
        <Box flex={1} backgroundColor={'white'} justifyContent={'center'}>
          <ActivityIndicator size={'large'} color={theme.colors.orange.dark} />
        </Box>
      ) : (
        children
      )}
    </Box>
  );
};

export default LoadingContainer;
