import {Icon, Pressable} from 'native-base';
import React, {memo} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import theme from '../../config/theme';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {StudentNavigationParams} from '../../types/types';

const AddButton = () => {
  const navigation = useNavigation<NavigationProp<StudentNavigationParams>>();
  const onAddPress = () => {
    navigation.navigate('StudentDetail');
  };
  return (
    <Pressable
      background={theme.colors.orange.dark}
      onPress={onAddPress}
      borderRadius={8}
      height={10}
      width={10}
      alignItems="center"
      justifyContent="center">
      <Icon as={Ionicons} name="add" size={6} color={theme.colors.white} />
    </Pressable>
  );
};

export default memo(AddButton);
