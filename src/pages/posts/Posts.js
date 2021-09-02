import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Header, PostsContainer } from '../../components/';

class Posts extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { history } = this.props;
    return (
      <div>
        <Header history={ history } />
        <PostsContainer history={ history } />
      </div>
    );
  }
}

Posts.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default connect(null, null)(Posts);
