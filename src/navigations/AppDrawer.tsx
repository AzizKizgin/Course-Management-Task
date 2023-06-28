import React from 'react';
import {Box, Icon, Pressable, Text, VStack} from 'native-base';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import LanguagePicker from '../components/Drawer/LanguagePicker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import theme from '../config/theme';
import {useUser} from '../contexts/UserContext';
import {Alert} from 'react-native';

const AppDrawer = (props: DrawerContentComponentProps) => {
  const {navigation} = props;
  const {logout} = useUser();
  return (
    <Box flex={1} backgroundColor="orange.100">
      <DrawerContentScrollView>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Logout"
          labelStyle={{fontSize: 16, color: theme.colors.black}}
          onPress={() => {
            Alert.alert(
              'Logout',
              'Are you sure you want to logout?',
              [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'Logout', onPress: () => logout()},
              ],
              {cancelable: false},
            );
          }}
          icon={() => (
            <Icon
              color={theme.colors.black}
              size={25}
              name="exit-outline"
              as={Ionicons}
            />
          )}
        />
      </DrawerContentScrollView>
      <VStack marginBottom={10} space={4}>
        <LanguagePicker inDrawer={true} />
      </VStack>
    </Box>
  );
};

export default AppDrawer;
