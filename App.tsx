import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Text, Box, NativeBaseProvider} from 'native-base';
import React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

const App = () => {
  const queryClient = new QueryClient();
  return (
    <NativeBaseProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <SafeAreaView
            style={{
              flex: 1,
              backgroundColor: 'white',
            }}>
            <Box flex={1} background={'#2234a8'}>
              <Ionicons name="person" size={21} color={'#6d1f66'} />
            </Box>
          </SafeAreaView>
        </NavigationContainer>
      </QueryClientProvider>
    </NativeBaseProvider>
  );
};

export default App;
