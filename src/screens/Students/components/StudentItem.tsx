import React, {FC, memo} from 'react';
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
import {Student} from '../../../types/types';

interface StudentItemProps {
  student: Student;
  index: number;
}

const StudentItem: FC<StudentItemProps> = ({student, index}) => {
  return (
    <Pressable onPress={() => console.log('Pressed')} shadow={2}>
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
            <Text fontSize="sm" color={theme.colors.black}>
              {student.email}
            </Text>
          </VStack>
          <Box alignItems="center" justifyContent="center" alignSelf="center">
            <Icon
              as={Ionicons}
              name="chevron-forward-outline"
              size={6}
              color={theme.colors.black}
            />
          </Box>
        </HStack>
      </Card>
    </Pressable>
  );
};

export default memo(StudentItem);
