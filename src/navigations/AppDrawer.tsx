import React from 'react';
import {Box, Icon, Text, VStack} from 'native-base';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import LanguagePicker from '../components/Drawer/LanguagePicker';

const AppDrawer = (props: DrawerContentComponentProps) => {
  const {navigation} = props;

  return (
    <Box flex={1} backgroundColor="orange.100">
      <DrawerContentScrollView>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <VStack marginBottom={10}>
        <LanguagePicker />
      </VStack>
    </Box>
  );
};

export default AppDrawer;
