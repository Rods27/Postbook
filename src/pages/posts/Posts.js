import React from 'react';
import PropTypes from 'prop-types';
import { Header, PostsContainer } from '../../components/';
import postsIntegration from '../../utils/postsIntegration';
import { Container } from './styles';

class Posts extends React.Component {
  render() {
    const { history } = this.props;
    if(!localStorage.favorites) localStorage.setItem('favorites', JSON.stringify([]));
    if(!localStorage.stars) localStorage.setItem('stars', JSON.stringify([]));
    return (
      <Container>
        <Header history={ history } />
        <PostsContainer history={ history } posts={ postsIntegration() } />
      </Container>
    );
  }
}

Posts.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default Posts;
