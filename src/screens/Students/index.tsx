import React, {useEffect, useState} from 'react';
import {Box, Center, HStack} from 'native-base';
import theme from '../../config/theme';
import {Text} from 'native-base';
import {FlatList} from 'react-native-gesture-handler';
import StudentItem from './components/StudentItem';
import SearchBar from '../../components/shared/SearchBar';
import {ActivityIndicator, RefreshControl} from 'react-native';
import {useLocalization} from '../../contexts/LocalizationContext';
import ListFooter from './components/ListFooter';

import {useQuery} from '@tanstack/react-query';
import {StudentsResponse} from '../../types/types';
import {searchStudents} from '../../utils/api';
import AddButton from '../../components/shared/AddButton';
import {useDebounce} from 'use-debounce';

const Students = () => {
  const {strings} = useLocalization();
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState('');
  const [debouncedQuery] = useDebounce(search, 400);
  const {
    data: students,
    isLoading,
    isFetching,
    refetch,
  } = useQuery<StudentsResponse>(['students', debouncedQuery], () => {
    return searchStudents(debouncedQuery, limit, page * limit);
  });

  useEffect(() => {
    refetch();
  }, [limit, page]);

  return (
    <Box flex={1} bg="white">
      <HStack
        space={3}
        width="90%"
        alignSelf="center"
        alignItems="center"
        justifyContent="space-between">
        <SearchBar query={search} setQuery={setSearch} />
        <AddButton />
      </HStack>
      {isLoading || isFetching ? (
        <Center flex={1}>
          <Text fontSize="sm">{strings.loading}</Text>
          <ActivityIndicator size="large" color={theme.colors.orange.dark} />
        </Center>
      ) : (
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={isFetching}
              onRefresh={() => {
                setLimit(5);
                setPage(0);
                refetch();
              }}
            />
          }
          contentContainerStyle={{paddingBottom: 50}}
          data={students?.users}
          renderItem={({item, index}) => (
            <StudentItem student={item} index={index} />
          )}
          ListFooterComponent={() => (
            <ListFooter
              limit={limit}
              setLimit={setLimit}
              page={page}
              setPage={setPage}
              total={students?.total || 0}
            />
          )}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </Box>
  );
};

export default Students;
