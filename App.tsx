import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Text, Box, NativeBaseProvider} from 'native-base';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import theme from './src/config/theme';
import Login from './src/screens/Login';
import {LocalizationProvider} from './src/contexts/LocalizationContext';
import MainNavigation from './src/navigations/MainNavigation';
import {UserProvider} from './src/contexts/UserContext';

const App = () => {
  const config = {
    dependencies: {
      'linear-gradient': require('react-native-linear-gradient').default,
    },
  };
  const queryClient = new QueryClient();
  return (
    <NativeBaseProvider theme={theme} config={config}>
      <QueryClientProvider client={queryClient}>
        <LocalizationProvider>
          <UserProvider>
            <MainNavigation />
          </UserProvider>
        </LocalizationProvider>
      </QueryClientProvider>
    </NativeBaseProvider>
  );
};

export default App;
