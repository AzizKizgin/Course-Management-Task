import {Box} from 'native-base';
import React from 'react';
import LanguagePicker from '../components/Drawer/LanguagePicker';

const Settings = () => {
  return (
    <Box flex={1} justifyContent="center" paddingX={6}>
      <LanguagePicker />
    </Box>
  );
};

export default Settings;
