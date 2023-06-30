import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SearchStudent, StudentDetail, Students} from '../screens';
import {useLocalization} from '../contexts/LocalizationContext';
import theme from '../config/theme';

const StudentNavigation = () => {
  const Stack = createNativeStackNavigator();
  const {strings} = useLocalization();
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
        headerBackTitleVisible: false,
        headerTintColor: theme.colors.orange.dark,
      }}>
      <Stack.Screen
        name="StudentList"
        component={Students}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="StudentDetail"
        component={StudentDetail}
        options={{
          headerTitle: strings.student_detail,
        }}
      />
      <Stack.Screen
        name="SearchStudent"
        component={SearchStudent}
        options={{
          headerTitle: strings.search_student,
        }}
      />
    </Stack.Navigator>
  );
};

export default StudentNavigation;
