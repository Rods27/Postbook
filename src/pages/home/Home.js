import React from 'react';
import PropTypes from 'prop-types';

class Home extends React.Component {
  render() {
    const { history } = this.props;
    history.push('/posts');
    return (
      <div></div>
    );
  }
}

Home.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default Home;
