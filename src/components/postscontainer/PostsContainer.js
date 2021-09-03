import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Post } from './styles';
import { detailsAction, favoritesAction } from '../../redux/actions';
import addToFavorite from '../../utils/addToFavorite';

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
    const { history, posts, dispatchPosts, dispatchFavorites, stateFavorites } = this.props;
    const { paging } = this.state;
    const localStorageFavorites = JSON.parse(localStorage.getItem('stars'));
    return (
      <Container>
        { posts && posts[paging].map((elem, index) => (
          <Post key={index}>
            <div className="name-div">
              <h5>{elem.name}</h5>
            </div>
            <div className="post-body">
              <button onClick={ () => {
                dispatchPosts([elem]);
                history.push(`/posts/${elem.id}`);
              }}>
                <h4>{elem.title}</h4>
                <p>{elem.body}</p>
              </button>
              <div>
                <button id="favorite" onClick={() => {
                  addToFavorite(elem, dispatchFavorites, stateFavorites);
                  this.setState({ favorites: true });
                }}>
                  { localStorageFavorites.includes(elem.id) ?
                    <i className="fas fa-star on"></i>
                    :
                    <i className="fas fa-star off"></i>
                  }
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

const mapStateToProps = (state) => ({
  stateFavorites: state.postsReducer.favoritePosts,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFavorites: (array) => dispatch(favoritesAction(array)),
  dispatchPosts: (array) => dispatch(detailsAction(array)),
});

PostsContainer.propTypes = {
  history: PropTypes.shape().isRequired,
  dispatchPosts: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
