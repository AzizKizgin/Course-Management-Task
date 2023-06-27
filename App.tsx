import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Text, Box, NativeBaseProvider} from 'native-base';
import React from 'react';

const App = () => {
  const queryClient = new QueryClient();
  return (
    <NativeBaseProvider>
      <QueryClientProvider client={queryClient}>
        <Box>
          <Text>Open up App.tsx to start working on your app!</Text>
        </Box>
      </QueryClientProvider>
    </NativeBaseProvider>
  );
};

export default App;
