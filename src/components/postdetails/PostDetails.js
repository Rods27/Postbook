import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Post } from './styles';
import { favoritesAction } from '../../redux/actions';


class PostDetails extends React.Component {
  favorite(elem) {
    const { dispatchFavorites, stateFavorites } = this.props;
    const localStorageFavorites = JSON.parse(localStorage.getItem('favorites'));
    const localStorageStars = JSON.parse(localStorage.getItem('stars'));
    if(!stateFavorites.includes(elem)) {
      stateFavorites.push(elem);
      dispatchFavorites(stateFavorites);
      localStorageStars.push(elem.id);
      localStorage.setItem('stars', JSON.stringify(localStorageStars));
      localStorage.setItem('favorites', JSON.stringify(stateFavorites));
    } else {
      const newStateFavorite = stateFavorites.filter((e) => e.id !== elem.id);
      dispatchFavorites(newStateFavorite)
      localStorage.setItem('favorites', JSON.stringify(newStateFavorite));
      const newlocalStorageStars = localStorageStars.filter((e) => e !== elem.id);
      localStorage.setItem('stars', JSON.stringify(newlocalStorageStars));
    }
    this.setState({ favorites: true })
  }

  render() {
    const { statePost } = this.props;
    const localStorageFavorites = JSON.parse(localStorage.getItem('stars'));
    return (
      <Container>
        { statePost.length > 0
          && statePost.map((elem, i) => (
            <Post key={ i }>
              <div className="name-div">
                <h5>{elem.name}</h5>
                <button id="favorite" onClick={ () => this.favorite(elem) }>
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
  statePost: state.postsReducer.post,
  stateFavorites: state.postsReducer.favoritePosts,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFavorites: (array) => dispatch(favoritesAction(array)),
});

PostDetails.propTypes = {
  statePost: PropTypes.arrayOf(PropTypes.object),
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
