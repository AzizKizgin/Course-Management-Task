import React, {useEffect, useRef, useState} from 'react';
import {Box, HStack, Icon, Image, Text} from 'native-base';
import RNPickerSelect from 'react-native-picker-select';
import {StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useLocalization} from '../../contexts/LocalizationContext';
import {storage} from '../../config/storage';
import theme from '../../config/theme';
import {turkeyFlag, ukFlag} from '../../utils/consts';

const LanguagePicker = () => {
  const {changeLanguage, strings} = useLocalization();
  const [language, setLanguage] = useState('en');
  const ref = useRef<RNPickerSelect>(null);
  useEffect(() => {
    const getLanguage = () => {
      const savedLanguage = storage.getString('language');
      if (savedLanguage) {
        setLanguage(savedLanguage);
      }
    };
    getLanguage();
  }, []);
  return (
    <Box style={styles.pickerSelectStyles}>
      <Text color={theme.colors.orange.dark}>{strings.language}</Text>
      <RNPickerSelect
        ref={ref}
        style={{
          inputAndroid: {
            color: 'black',
            fontSize: 16,
          },
          inputIOS: {
            color: 'black',
            fontSize: 16,
          },
        }}
        onValueChange={(value: any) => {
          setLanguage(value);
          changeLanguage(value);
        }}
        value={language}
        items={[
          {label: 'English', value: 'en'},
          {label: 'Türkçe', value: 'tr'},
        ]}
        //@ts-ignore
        Icon={() => {
          return (
            <HStack alignItems="center" space={2}>
              {language === 'tr' ? (
                <Icon
                  as={<Image source={turkeyFlag} alt="Mortarboard" />}
                  size={22}
                />
              ) : (
                <Icon
                  as={<Image source={ukFlag} alt="Mortarboard" />}
                  size={22}
                />
              )}
              <Icon
                as={<MaterialCommunityIcons name="chevron-down" />}
                size={5}
                color="black"
              />
            </HStack>
          );
        }}
      />
    </Box>
  );
};

export default LanguagePicker;

const styles = StyleSheet.create({
  pickerSelectStyles: {
    marginHorizontal: 0,
    paddingHorizontal: 10,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    marginRight: 10,
    borderColor: 'transparent',
  },
});
