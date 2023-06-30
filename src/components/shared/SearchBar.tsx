import {Center, Icon, Input} from 'native-base';
import React, {FC} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import theme from '../../config/theme';
import {useLocalization} from '../../contexts/LocalizationContext';

interface SearchBarProps {
  query: string;
  setQuery: (query: string) => void;
}
const SearchBar: FC<SearchBarProps> = ({query, setQuery}) => {
  const {strings} = useLocalization();
  return (
    <Center flex={1}>
      <Input
        placeholder={strings.search}
        backgroundColor={theme.colors.white}
        borderRadius={10}
        fontSize={16}
        height={10}
        value={query}
        onChangeText={setQuery}
        autoCorrect={false}
        autoComplete="off"
        my={2}
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
