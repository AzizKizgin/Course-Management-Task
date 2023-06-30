import {Box, HStack, Icon, Image, Text} from 'native-base';
import React, {FC} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RNPickerSelect from 'react-native-picker-select';
import {useLocalization} from '../../../contexts/LocalizationContext';
import theme from '../../../config/theme';

interface LimitPickerProps {
  limit: number;
  setLimit: (limit: number) => void;
}

const LimitPicker: FC<LimitPickerProps> = ({limit, setLimit}) => {
  const {strings} = useLocalization();
  return (
    <HStack
      maxW="100"
      shadow={2}
      paddingX={2}
      alignItems="center"
      backgroundColor={theme.colors.orange.dark}
      borderRadius={4}>
      <Text color={theme.colors.white} fontSize="md">
        {strings.limit + ': '}
      </Text>
      <RNPickerSelect
        placeholder={{}}
        useNativeAndroidPickerStyle={false}
        style={{
          inputIOS: {
            fontSize: 16,
            borderRadius: 4,
            paddingRight: 40,
            height: 42,
            color: theme.colors.white,
          },
          inputAndroid: {
            fontSize: 16,
            borderRadius: 4,
            paddingRight: 30,
            height: 42,
            color: theme.colors.white,
          },
          iconContainer: {
            top: 10,
            right: 8,
          },
        }}
        onValueChange={(value: any) => {
          setLimit(value);
        }}
        value={limit}
        items={[
          {label: '5', value: 5},
          {label: '10', value: 10},
          {label: '15', value: 15},
          {label: '20', value: 20},
        ]}
        //@ts-ignore
        Icon={() => {
          return (
            <HStack alignItems="center">
              <Icon
                as={<MaterialCommunityIcons name="chevron-down" />}
                size={5}
                color={theme.colors.white}
              />
            </HStack>
          );
        }}
      />
    </HStack>
  );
};

export default LimitPicker;
