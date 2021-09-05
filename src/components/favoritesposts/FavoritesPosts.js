import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { favoritesAction } from '../../redux/actions';
import { Container, Post } from './styles'
import addToFavorite from '../../utils/addToFavorite';
import favoriteToRedux from '../../utils/favoriteToRedux';

class FavoritesPosts extends React.Component {
  componentDidMount() {
    const { dispatchFavorites } = this.props;
    favoriteToRedux(dispatchFavorites);
  }

  render() {
    const { history, stateFavorites, dispatchFavorites } = this.props;
    const localStorageFavorites = JSON.parse(localStorage.getItem('stars'));
    return (
      <Container>
        { (stateFavorites && stateFavorites.length > 0)
          ? stateFavorites.map((elem, index) => (
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
        )) : (
          <div>
            <p>Não há posts Favoritos.</p>
          </div>
        )
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

FavoritesPosts.propTypes = {
  stateFavorites: PropTypes.arrayOf(PropTypes.object),
  dispatchFavorites: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPosts);

