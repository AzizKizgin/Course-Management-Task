import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {Box, Image, Pressable, VStack, Icon} from 'native-base';
import React, {useCallback, useEffect, useState} from 'react';
import {Student, StudentNavigationParams} from '../../types/types';
import {useFormik} from 'formik';
import {useStudentSchema} from '../../config/validation';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {
  addStudent,
  deleteStudent,
  getStudentsById,
  updateStudent,
} from '../../utils/api';
import FormInput from '../../components/shared/Form/FormInput';
import {ScrollView} from 'react-native-gesture-handler';
import FormButton from '../../components/shared/Form/FormButton';
import {useLocalization} from '../../contexts/LocalizationContext';
import LoadingContainer from '../../components/shared/Form/LoadingContainer';
import theme from '../../config/theme';
import {Alert} from 'react-native';
import FormImage from '../../components/shared/Form/FormImage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DeleteButton from '../../components/shared/DeleteButton';

const StudentDetail = () => {
  const queryCache = useQueryClient();
  const navigation = useNavigation<NavigationProp<StudentNavigationParams>>();
  const {params} =
    useRoute<RouteProp<StudentNavigationParams, 'StudentDetail'>>();
  const studentId = params?.studentId;

  const {strings} = useLocalization();
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  const {
    data: student,
    isLoading,
    isFetching,
    refetch,
  } = useQuery<Student>(['student', studentId], () => {
    return getStudentsById(studentId!);
  });

  const {mutate: deleteStudentMutate} = useMutation({
    mutationFn: deleteStudent,
    onSuccess: () => {
      Alert.alert(strings.success, strings.student_deleted_successfully);
      queryCache.invalidateQueries(['students']);
    },
    onError: () => {
      Alert.alert(strings.error, strings.something_went_wrong);
    },
  });

  const {mutate: addStudentMutate} = useMutation({
    mutationFn: addStudent,
    onSuccess: () => {
      Alert.alert(strings.success, strings.student_added_successfully);
      queryCache.invalidateQueries(['students']);
    },
    onError: () => {
      Alert.alert(strings.error, strings.something_went_wrong);
    },
  });

  const {mutate: updateStudentMutate} = useMutation({
    mutationFn: updateStudent,
    onSuccess: () => {
      Alert.alert(strings.success, strings.student_updated_successfully);
      queryCache.invalidateQueries(['students']);
    },
    onError: () => {
      Alert.alert(strings.error, strings.something_went_wrong);
    },
  });

  const onSave = (values: Student) => {
    if (studentId) {
      updateStudentMutate(values);
    } else {
      addStudentMutate(values);
    }
  };

  const onDelete = useCallback(() => {
    if (studentId) {
      Alert.alert(strings.delete, strings.are_you_sure_want_to_delete_student, [
        {
          text: strings.yes,
          onPress: () => {
            deleteStudentMutate(studentId);
            navigation.goBack();
          },
        },
        {
          text: strings.no,
        },
      ]);
    }
  }, [strings, deleteStudentMutate, studentId, navigation]);

  const formik = useFormik({
    initialValues: {
      email: '',
      phone: '',
      companyName: '',
      firstName: '',
      lastName: '',
      username: '',
    },
    validationSchema: useStudentSchema,
    onSubmit: values => {
      onSave({
        company: {
          name: values.companyName,
        },
        email: values.email,
        firstName: values.firstName,
        lastName: values.lastName,
        phone: values.phone,
        username: values.username,
        image: student?.image || '',
        id: student?.id!,
      });
    },
  });

  useEffect(() => {
    if (!studentId) {
      navigation.setOptions({
        headerTitle: strings.add_student,
      });
    } else {
      navigation.setOptions({
        headerRight: () => (
          <DeleteButton onDelete={onDelete} color={theme.colors.orange.dark} />
        ),
      });
    }
  }, []);

  useEffect(() => {
    if (student && studentId) {
      formik.setValues({
        email: student.email,
        phone: student.phone,
        companyName: student.company.name,
        firstName: student.firstName,
        lastName: student.lastName,
        username: student.username,
      });
    }
  }, [student]);

  return (
    <LoadingContainer isLoading={isLoading || isFetching}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: 'white',
          paddingBottom: 75,
        }}>
        <VStack flex={1} backgroundColor="white" width="90%" alignSelf="center">
          <FormImage image={student?.image} />
          <FormInput
            errors={formik.errors.firstName}
            handleChange={formik.handleChange('firstName')}
            isButtonPressed={isButtonPressed}
            setIsButtonPressed={setIsButtonPressed}
            placeholder="First Name"
            value={formik.values.firstName}
          />
          <FormInput
            errors={formik.errors.lastName}
            handleChange={formik.handleChange('lastName')}
            isButtonPressed={isButtonPressed}
            setIsButtonPressed={setIsButtonPressed}
            placeholder="Last Name"
            value={formik.values.lastName}
          />
          <FormInput
            errors={formik.errors.username}
            handleChange={formik.handleChange('username')}
            isButtonPressed={isButtonPressed}
            setIsButtonPressed={setIsButtonPressed}
            placeholder="username"
            value={formik.values.username}
          />
          <FormInput
            errors={formik.errors.email}
            handleChange={formik.handleChange('email')}
            isButtonPressed={isButtonPressed}
            setIsButtonPressed={setIsButtonPressed}
            placeholder="email"
            value={formik.values.email}
          />
          <FormInput
            errors={formik.errors.phone}
            handleChange={formik.handleChange('phone')}
            isButtonPressed={isButtonPressed}
            setIsButtonPressed={setIsButtonPressed}
            placeholder="phone"
            value={formik.values.phone}
          />
          <FormInput
            errors={formik.errors.companyName}
            handleChange={formik.handleChange('companyName')}
            isButtonPressed={isButtonPressed}
            setIsButtonPressed={setIsButtonPressed}
            placeholder="companyName"
            value={formik.values.companyName}
          />
          <FormButton
            handleSubmit={formik.handleSubmit}
            label="Save"
            setIsButtonPressed={setIsButtonPressed}
          />
        </VStack>
      </ScrollView>
    </LoadingContainer>
  );
};

export default StudentDetail;
