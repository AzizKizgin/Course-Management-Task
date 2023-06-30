import {Box, HStack} from 'native-base';
import React, {FC} from 'react';
import LimitPicker from './LimitPicker';
import PageButtons from './PageButtons';

interface ListFooterProps {
  limit: number;
  setLimit: (limit: number) => void;
  page: number;
  setPage: (page: number) => void;
  total: number;
}
const ListFooter: FC<ListFooterProps> = props => {
  const {limit, setLimit, page, setPage, total} = props;
  return (
    <HStack
      flex={1}
      alignItems="center"
      justifyContent="space-between"
      paddingY={2}
      paddingX={5}>
      <LimitPicker limit={limit} setLimit={setLimit} />
      <PageButtons page={page} setPage={setPage} limit={limit} total={total} />
    </HStack>
  );
};

export default ListFooter;
