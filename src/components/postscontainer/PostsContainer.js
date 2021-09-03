import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Post } from './styles';

class PostsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      paging: 0,
    };
  }

  paging(paging) {
    if (paging !== 9) {
      this.setState({ paging: paging + 1 })
    } else {
      this.setState({ paging: 0 })
    }
  }

  render() {
    const { history, posts } = this.props;
    const { paging } = this.state;
    console.log(posts[paging])
    return (
      <Container>
        { posts && posts[paging].map((elem, index) => (
          <Post key={index}>
            <div className="name-div">
              <h5>{elem.name}</h5>
            </div>
            <div className="post-body">
              <button onClick={ () => history.push(`/posts/${elem.id}`)}>
                <h4>{elem.title}</h4>
                <p>{elem.body}</p>
              </button>
              <div>
                <button id="favorite">
                  <i className="fas fa-star"></i>
                </button>
                <p id="comments">Comentários: {elem.comments.length}</p>
              </div>
            </div>
          </Post>
        )
        )}
        <button onClick={ () => this.paging(paging) }>
          Próxima Página
        </button>
      </Container>
    );
  }
}

PostsContainer.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default connect(null, null)(PostsContainer);
