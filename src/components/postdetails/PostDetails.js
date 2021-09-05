import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Post } from './styles';
import { favoritesAction } from '../../redux/actions';
import addToFavorite from '../../utils/addToFavorite';
import favoriteToRedux from '../../utils/favoriteToRedux';
import postsIntegration from '../../utils/postsIntegration';


class PostDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      actualPost: [],
    }
  }

  componentDidMount() {
    const { dispatchFavorites } = this.props;
    favoriteToRedux(dispatchFavorites);
    this.getActualPostIntoState();
  }

  getActualPostIntoState() {
    const { history: { location: { pathname } } } = this.props;
    const pagePostId = Number(pathname.split('/')[2]);
    const posts = postsIntegration(true);
    const actualPost = posts.filter((elem) => elem.id === pagePostId);
    this.setState({ actualPost });
  }

  render() {
    const { dispatchFavorites, stateFavorites } = this.props;
    const { actualPost } = this.state;
    const localStorageFavorites = JSON.parse(localStorage.getItem('stars'));
    return (
      <Container>
        { (actualPost && actualPost.length > 0)
          && actualPost.map((elem, i) => (
            <Post key={ i }>
              <div className="name-div">
                <h5>{elem.name}</h5>
                <button id="favorite" onClick={ () => {
                  addToFavorite(elem, dispatchFavorites, stateFavorites);
                  this.setState({ favorites: true });
                }}>
                  { localStorageFavorites.includes(elem.id) ?
                    <i className="fas fa-star on"></i>
                    :
                    <i className="fas fa-star off"></i>
                  }
                </button>
              </div>
              <h4>{elem.title}</h4>
              <p>{elem.body}</p>
              <div className="comments">
                Comentários:
                { elem.comments.map((elem2, i) => (
                  <div key={ i } id="comment">
                    <p>{elem2.email}</p>
                    <h5>{elem2.name}</h5>
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
  stateFavorites: state.postsReducer.favoritePosts,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFavorites: (array) => dispatch(favoritesAction(array)),
});

PostDetails.propTypes = {
  stateFavorites: PropTypes.arrayOf(PropTypes.object),
  dispatchFavorites: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
