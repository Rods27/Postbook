import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class PostsContainer extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { history } = this.props;
    console.log(history);
    return (
      <div>
        <p>Your Code Here</p>
      </div>
    );
  }
}

PostsContainer.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default connect(null, null)(PostsContainer);
