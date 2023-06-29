import React, {useEffect, useState} from 'react';
import {StudentResponse, Student} from '../../types/types';
import {Box, Center} from 'native-base';
import theme from '../../config/theme';
import {Text} from 'native-base';
import {FlatList} from 'react-native-gesture-handler';
import StudentItem from './components/StudentItem';
import SearchBar from './components/SearchBar';
import {useQuery} from '@tanstack/react-query';
import {getAllStudents} from '../../utils/api';
import {ActivityIndicator} from 'react-native';
import {useLocalization} from '../../contexts/LocalizationContext';
import LimitPicker from './components/LimitPicker';
import ListFooter from './components/ListFooter';

const Students = () => {
  const {strings} = useLocalization();
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);

  const {
    data: students,
    isLoading,
    isFetching,
    refetch,
  } = useQuery<StudentResponse>(['students'], () => {
    return getAllStudents(limit, page * limit);
  });

  useEffect(() => {
    refetch();
  }, [limit, page]);

  return (
    <Box flex={1} bg="white">
      {isLoading || isFetching ? (
        <Center flex={1}>
          <Text fontSize="sm">{strings.loading}</Text>
          <ActivityIndicator size="large" color={theme.colors.orange.dark} />
        </Center>
      ) : (
        <FlatList
          contentContainerStyle={{paddingBottom: 50}}
          data={students?.users}
          renderItem={({item, index}) => (
            <StudentItem student={item} index={index} />
          )}
          ListHeaderComponent={() => <SearchBar />}
          ListFooterComponent={() => (
            <ListFooter
              limit={limit}
              setLimit={setLimit}
              page={page}
              setPage={setPage}
            />
          )}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </Box>
  );
};

export default Students;
