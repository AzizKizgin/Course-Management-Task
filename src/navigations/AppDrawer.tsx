import React from 'react';
import {Box, Center, Icon, Image, Pressable, Text, VStack} from 'native-base';
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
import {useLocalization} from '../contexts/LocalizationContext';
import AppTitle from '../components/shared/AppTitle';
import DrawerUserInfo from '../components/Drawer/DrawerUserInfo';

const AppDrawer = (props: DrawerContentComponentProps) => {
  const {strings} = useLocalization();
  const {logout} = useUser();
  return (
    <Box flex={1} backgroundColor="orange.100">
      <DrawerContentScrollView>
        <DrawerUserInfo />
        <DrawerItemList {...props} />
        <DrawerItem
          style={{marginLeft: 12}}
          label={strings.logout}
          labelStyle={{fontSize: 16, color: theme.colors.black}}
          onPress={() => {
            Alert.alert(
              strings.logout,
              strings.are_you_sure_want_to_logout,
              [
                {
                  text: strings.cancel,
                  style: 'cancel',
                },
                {text: strings.logout, onPress: () => logout()},
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
    </Box>
  );
};

export default AppDrawer;
