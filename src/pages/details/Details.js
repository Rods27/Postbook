import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';
import { Header, PostDetails } from '../../components/';

class Details extends React.Component {
  render() {
    const { history } = this.props;
    if(!localStorage.favorites) localStorage.setItem('favorites', JSON.stringify([]));
    if(!localStorage.stars) localStorage.setItem('stars', JSON.stringify([]));
    return (
      <Container>
        <Header history={ history } />
        <PostDetails history={ history } />
      </Container>
    );
  }
}

Details.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default Details;
