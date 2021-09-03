import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Post } from './styles';


class PostDetails extends React.Component {
  render() {
    const { statePost } = this.props;
    return (
      <Container>
        { statePost.length > 0
          && statePost.map((elem, i) => (
            <Post key={ i }>
              <div className="name-div">
                <h5>{elem.name}</h5>
                <button id="favorite">
                  <i className="fas fa-star"></i>
                </button>
              </div>
              <h4>{elem.title}</h4>
              <p>{elem.body}</p>
              <div className="comments">
                Comentários:
                { elem.comments.map((elem2, i) => (
                  <div key={ i }>
                    <p>{elem2.email}</p>
                    <p>{elem2.name}</p>
                    <p>{elem2.body}</p>
                  </div>
                ))}
              </div>
            </Post>
          ))
        }
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  statePost: state.postsReducer.post,
});

PostDetails.propTypes = {
  history: PropTypes.shape().isRequired,
  statePost: PropTypes.arrayOf(PropTypes.object),
};

export default connect(mapStateToProps, null)(PostDetails);
