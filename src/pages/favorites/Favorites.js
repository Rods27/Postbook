import React from 'react';
import PropTypes from 'prop-types';
import { Header, FavoritesPosts } from '../../components'
import { Container } from './styles'

class Favorites extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <Container>
        <Header history={ history } />
        <FavoritesPosts history={ history } />
      </Container>
    );
  }
}

Favorites.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default Favorites;
