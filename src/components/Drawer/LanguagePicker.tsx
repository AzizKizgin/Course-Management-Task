import React, {FC, useEffect, useState} from 'react';
import {Box, HStack, Icon, Image, Text} from 'native-base';
import RNPickerSelect from 'react-native-picker-select';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useLocalization} from '../../contexts/LocalizationContext';
import {storage} from '../../config/storage';
import theme from '../../config/theme';
import {turkeyFlag, ukFlag} from '../../utils/consts';
import {StyleSheet} from 'react-native';

const LanguagePicker = () => {
  const {changeLanguage, strings} = useLocalization();
  const [language, setLanguage] = useState('en');

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
    <Box>
      <Text color={theme.colors.orange.dark}>{strings.language}</Text>
      <RNPickerSelect
        useNativeAndroidPickerStyle={false}
        style={{
          inputIOS: styles.select,
          inputAndroid: styles.select,
          iconContainer: {
            top: 10,
            right: 8,
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
            <HStack alignItems="center">
              {language === 'tr' ? (
                <Icon
                  as={<Image source={turkeyFlag} alt="turkeyFlag" />}
                  size={22}
                />
              ) : (
                <Icon as={<Image source={ukFlag} alt="ukFlag" />} size={22} />
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
  select: {
    fontSize: 16,
    borderRadius: 8,
    paddingRight: 30,
    height: 42,
    borderWidth: 1,
    borderColor: theme.colors.orange.dark,
    paddingLeft: 10,
  },
});
