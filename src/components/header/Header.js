import React from 'react';
import PropTypes from 'prop-types';
import { HeaderContainer } from './style'

class Header extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <HeaderContainer>
        <button id="home" onClick={ () => history.push('/posts') }>
          <i className="fas fa-home"></i>
        </button>
        <h1>Postbook</h1>
        <button id="favorites" onClick={ () => history.push('/favorites') }>
          <i className="fas fa-star"></i>
        </button>
      </HeaderContainer>
    );
  }
}

Header.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default Header;
