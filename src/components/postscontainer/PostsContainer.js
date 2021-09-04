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
    this.infiniteScroll = this.infiniteScroll.bind(this);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.infiniteScroll);
  }

  componentDidMount() {
    this.statePosts();
    document.addEventListener('scroll', this.infiniteScroll);
  }

  statePosts() {
    const { posts } = this.props;
    const statePosts = posts[0];
    this.setState({ statePosts });
  }

  componentDidUpdate() {
    const { paging } = this.state;
    if (paging < 10) {
      document.addEventListener('scroll', this.infiniteScroll);
    }
  }

  infiniteScroll() {
    const containerHeight = document.querySelector('.post-container')
    .getBoundingClientRect().bottom 
    if (containerHeight <= window.innerHeight) {
      this.increaseState();
      document.removeEventListener('scroll', this.infiniteScroll);
    }
    this.setState({ render: true });
  }

  increaseState() {
    const { posts } = this.props;
    const { paging, statePosts } = this.state;
    this.setState(prevState => ({
      paging: prevState.paging + 1 
    }));
    statePosts.push(...posts[paging]);
  }

  render() {
    const { history, dispatchPosts, dispatchFavorites, stateFavorites } = this.props;
    const { statePosts } = this.state;
    const localStorageFavorites = JSON.parse(localStorage.getItem('stars'));
    return (
      <Container className="post-container">
        { statePosts && statePosts.map((elem, index) => (
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
