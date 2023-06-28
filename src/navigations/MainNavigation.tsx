import React from 'react';
import {Box, Text} from 'native-base';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Drawer from './Drawer';
import AuthenticationNavigation from './AuthenticationNavigation';
import {useUser} from '../contexts/UserContext';
import {NavigationContainer} from '@react-navigation/native';

const MainNavigation = () => {
  const {isLogin} = useUser();
  return (
    <NavigationContainer>
      {isLogin ? <Drawer /> : <AuthenticationNavigation />}
    </NavigationContainer>
  );
};

export default MainNavigation;
