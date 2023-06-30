import {Center, Image, Text} from 'native-base';
import React from 'react';
import AppTitle from '../shared/AppTitle';
import theme from '../../config/theme';

const DrawerUserInfo = () => {
  return (
    <Center marginY={2}>
      <AppTitle size="small" />
      <Image
        source={{
          uri: 'https://robohash.org/8W7.png?set=set4',
        }}
        width={120}
        height={120}
        alt="logo"
        rounded={'full'}
        resizeMode="center"
        borderWidth={1}
        borderColor={theme.colors.orange.dark}
      />
      <Text fontSize={20} fontWeight="bold" marginTop={2}>
        John Doe
      </Text>
      <Text fontSize={16} color={theme.colors.orange.dark}>
        Admin
      </Text>
    </Center>
  );
};

export default DrawerUserInfo;
