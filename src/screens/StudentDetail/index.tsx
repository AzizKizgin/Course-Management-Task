import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {Box, Text} from 'native-base';
import React, {useEffect} from 'react';
import {StudentNavigationParams} from '../../types/types';

const StudentDetail = () => {
  const navigation = useNavigation<NavigationProp<StudentNavigationParams>>();
  const {params} =
    useRoute<RouteProp<StudentNavigationParams, 'StudentDetail'>>();

  useEffect(() => {
    if (!params?.studentId) {
      navigation.setOptions({
        headerTitle: 'Add Student',
      });
    }
  }, []);
  return (
    <Box flex={1} backgroundColor="white">
      <Text>Student Detail</Text>
    </Box>
  );
};

export default StudentDetail;
