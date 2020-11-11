import React from 'react';
import { Flex } from '@chakra-ui/core';

import PostList from './PostList';

const App = () => {
  return (
    <Flex backgroundColor='gray.900' color='white'>
      <PostList />
    </Flex>
  );
};

export default App;
