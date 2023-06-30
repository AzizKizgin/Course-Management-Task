import {Icon, Pressable} from 'native-base';
import React, {FC} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface DeleteButtonProps {
  onDelete: () => void;
  color: string;
}
const DeleteButton: FC<DeleteButtonProps> = ({onDelete, color}) => {
  return (
    <Pressable onPress={onDelete}>
      <Icon
        as={MaterialCommunityIcons}
        name="delete-outline"
        size={7}
        color={color}
      />
    </Pressable>
  );
};

export default DeleteButton;
