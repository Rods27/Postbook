import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { HeaderContainer } from './style'

class Header extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { history } = this.props;
    console.log(history);
    return (
      <HeaderContainer>
        <h1>Postbook</h1>
        <button>
          <i class="fas fa-star"></i>
        </button>
      </HeaderContainer>
    );
  }
}

Header.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default connect(null, null)(Header);
