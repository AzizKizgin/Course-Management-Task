import {HStack, Icon, Pressable, Text} from 'native-base';
import React, {FC} from 'react';
import theme from '../../../config/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface PageButtonsProps {
  page: number;
  setPage: (page: number) => void;
  limit: number;
  total: number;
}

const PageButtons: FC<PageButtonsProps> = props => {
  const {page, setPage, limit, total} = props;
  const first = page * limit + 1;
  const last = limit * (page + 1);
  return (
    <HStack
      shadow={2}
      paddingX={2}
      alignItems="center"
      backgroundColor={theme.colors.orange.dark}
      borderRadius={4}>
      <Text color={theme.colors.white} fontSize="md" marginLeft={2}>
        {`${first} - ${last} of ${total}`}
      </Text>
      <Pressable
        onPress={() => {
          if (page > 0) {
            setPage(page - 1);
          }
        }}
        padding={2}>
        <Icon
          as={Ionicons}
          name="chevron-back-outline"
          size={6}
          color={theme.colors.white}
        />
      </Pressable>
      <Pressable
        onPress={() => {
          if (last < total) {
            setPage(page + 1);
          }
        }}
        padding={2}>
        <Icon
          as={Ionicons}
          name="chevron-forward-outline"
          size={6}
          color={theme.colors.white}
        />
      </Pressable>
    </HStack>
  );
};

export default PageButtons;
