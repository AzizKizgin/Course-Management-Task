import {Center, Icon, Input} from 'native-base';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import theme from '../../../config/theme';
import {useLocalization} from '../../../contexts/LocalizationContext';

const SearchBar = () => {
  const {strings} = useLocalization();
  return (
    <Center>
      <Input
        placeholder={strings.search}
        width="90%"
        backgroundColor={theme.colors.gray[100]}
        borderRadius={10}
        fontSize={16}
        height={10}
        my={2}
        onSubmitEditing={() => console.log('Submitted')}
        rightElement={
          <Icon
            as={Ionicons}
            name="search"
            size={5}
            marginRight={2}
            color={theme.colors.orange.dark}
          />
        }
      />
    </Center>
  );
};

export default SearchBar;
