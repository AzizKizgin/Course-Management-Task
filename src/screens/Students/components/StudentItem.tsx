import React, {FC, memo, useCallback} from 'react';
import {
  Card,
  HStack,
  Box,
  VStack,
  theme,
  Icon,
  Text,
  Image,
  Pressable,
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {getItemColor} from '../../../utils/helpers';
import {Student, StudentNavigationParams} from '../../../types/types';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {deleteStudents} from '../../../utils/api';
import {Alert} from 'react-native';
import {useLocalization} from '../../../contexts/LocalizationContext';

interface StudentItemProps {
  student: Student;
  index: number;
}

const StudentItem: FC<StudentItemProps> = ({student, index}) => {
  const {strings} = useLocalization();
  const queryCache = useQueryClient();
  const navigation = useNavigation<NavigationProp<StudentNavigationParams>>();
  const onPress = () => {
    navigation.navigate('StudentDetail', {
      studentId: student.id,
    });
  };

  const {mutate: deleteStudentMutate, isLoading} = useMutation({
    mutationFn: deleteStudents,
    onSuccess: () => {
      Alert.alert(strings.success, strings.student_deleted_successfully);
      queryCache.invalidateQueries(['students']);
    },
    onError: () => {
      Alert.alert(strings.error, strings.something_went_wrong);
    },
  });

  const onDelete = useCallback(() => {
    Alert.alert(strings.delete, strings.are_you_sure_want_to_delete_student, [
      {
        text: strings.yes,
        onPress: () => {
          deleteStudentMutate(student.id);
        },
      },
      {
        text: strings.no,
      },
    ]);
  }, [strings, deleteStudentMutate, student.id]);

  return (
    <Pressable
      onPress={onPress}
      shadow={2}
      _pressed={{
        shadow: 4,
      }}>
      <Card
        key={student.id}
        backgroundColor={getItemColor(index)}
        width="90%"
        alignSelf="center"
        marginY={2}>
        <HStack space={4}>
          <Box>
            <Image
              source={{uri: student.image}}
              alt="Student image"
              height={75}
              width={75}
              resizeMode="cover"
              backgroundColor="white"
              rounded="full"
            />
          </Box>
          <VStack justifyContent="center" flex={1}>
            <Text fontSize="lg" fontWeight="bold" color={theme.colors.black}>
              {student.firstName + ' ' + student.lastName}
            </Text>
            <Text fontSize="md" color={theme.colors.black}>
              {student.username}
            </Text>
            <Text fontSize="sm" color={theme.colors.black} numberOfLines={1}>
              {student.email}
            </Text>
          </VStack>
          <HStack
            alignItems="center"
            justifyContent="center"
            alignSelf="center">
            <Pressable onPress={onDelete}>
              <Icon
                as={MaterialCommunityIcons}
                name="delete-outline"
                size={7}
                color={theme.colors.black}
              />
            </Pressable>
            <Icon
              as={Ionicons}
              name="chevron-forward-outline"
              size={6}
              color={theme.colors.black}
            />
          </HStack>
        </HStack>
      </Card>
    </Pressable>
  );
};

export default memo(StudentItem);
