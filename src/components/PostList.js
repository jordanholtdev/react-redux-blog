import React from 'react';
import { Box, Stack, Icon, Text, Heading } from '@chakra-ui/core';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  renderList() {
    return this.props.posts.map((post) => {
      return (
        <Box key={post.id} borderWidth='1px'>
          <Stack isInline spacing={8} p={2}>
            <Icon name='phone' size={12} />
            <Stack>
              <Box>
                <Heading as='h3' size='xl'>
                  {post.title}
                </Heading>
                <Text>{post.body}</Text>
              </Box>
              <UserHeader userId={post.userId} />
            </Stack>
          </Stack>
        </Box>
      );
    });
  }

  render() {
    return <Box>{this.renderList()}</Box>;
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
