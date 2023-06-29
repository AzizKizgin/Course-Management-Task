import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Course, Payment, Report, Home, Settings, Students} from '../screens';
import AppDrawer from './AppDrawer';
import {Icon, Image, Pressable} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {mortarBoard, mortarBoardOutline} from '../utils/consts';
import theme from '../config/theme';
import {useLocalization} from '../contexts/LocalizationContext';

const Drawer = () => {
  const {strings} = useLocalization();
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={props => <AppDrawer {...props} />}
      screenOptions={({route, navigation}) => ({
        headerTintColor: 'white',
        drawerActiveTintColor: 'white',
        drawerActiveBackgroundColor: theme.colors.orange.dark,
        drawerInactiveTintColor: 'black',
        drawerLabelStyle: {
          fontSize: 16,
        },
        drawerItemStyle: {
          marginHorizontal: 0,
          paddingHorizontal: 10,
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
          marginRight: 10,
          borderColor: 'transparent',
        },
        headerStyle: {
          backgroundColor: theme.colors.orange.dark,
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        headerRight: () => (
          <Icon
            as={MaterialCommunityIcons}
            name="bell-outline"
            size={6}
            color="white"
            mr={3}
          />
        ),
        drawerIcon: ({focused, color}) => {
          switch (route.name) {
            case 'Home':
              return (
                <Icon
                  as={Ionicons}
                  name={focused ? 'home' : 'home-outline'}
                  size={25}
                  color={color}
                />
              );
            case 'Course':
              return (
                <Icon
                  as={Ionicons}
                  name={focused ? 'bookmark' : 'bookmark-outline'}
                  size={25}
                  color={color}
                />
              );
            case 'Students':
              if (focused) {
                return (
                  <Icon
                    as={
                      <Image
                        source={mortarBoard}
                        alt="Mortarboard"
                        tintColor={theme.colors.white}
                      />
                    }
                    size={25}
                  />
                );
              } else {
                return (
                  <Icon
                    as={
                      <Image
                        source={mortarBoardOutline}
                        alt="Mortarboard"
                        tintColor={theme.colors.black}
                      />
                    }
                    size={25}
                  />
                );
              }
            case 'Payment':
              return (
                <Icon
                  as={Ionicons}
                  name={'ios-logo-usd'}
                  size={25}
                  color={color}
                />
              );
            case 'Reports':
              return (
                <Icon
                  as={MaterialCommunityIcons}
                  name={focused ? 'file-document' : 'file-document-outline'}
                  size={25}
                  color={color}
                />
              );
            case 'Settings':
              return (
                <Icon
                  as={Ionicons}
                  name={focused ? 'settings' : 'settings-outline'}
                  size={25}
                  color={color}
                />
              );
            case 'Payment':
              return (
                <Icon
                  as={Ionicons}
                  name={focused ? 'wallet' : 'wallet-outline'}
                  size={25}
                  color={color}
                />
              );
          }
        },
      })}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerLabel: strings.home,
          headerTitle: strings.home,
        }}
      />
      <Drawer.Screen
        name="Course"
        component={Course}
        options={{
          drawerLabel: strings.course,
          headerTitle: strings.course,
        }}
      />
      <Drawer.Screen
        name="Students"
        component={Students}
        options={{
          drawerLabel: strings.students,
          headerTitle: strings.students,
        }}
      />
      <Drawer.Screen
        name="Payment"
        component={Payment}
        options={{
          drawerLabel: strings.payments,
          headerTitle: strings.payments,
        }}
      />
      <Drawer.Screen
        name="Reports"
        component={Report}
        options={{
          drawerLabel: strings.reports,
          headerTitle: strings.reports,
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          drawerLabel: strings.settings,
          headerTitle: strings.settings,
        }}
      />
    </Drawer.Navigator>
  );
};

export default Drawer;
