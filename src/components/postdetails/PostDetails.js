import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Post } from './styles';
import { favoritesAction } from '../../redux/actions';
import addToFavorite from '../../utils/addToFavorite';


class PostDetails extends React.Component {
  render() {
    const { statePost, dispatchFavorites, stateFavorites } = this.props;
    const localStorageFavorites = JSON.parse(localStorage.getItem('stars'));
    return (
      <Container>
        { statePost.length > 0
          && statePost.map((elem, i) => (
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
  statePost: state.postsReducer.post,
  stateFavorites: state.postsReducer.favoritePosts,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFavorites: (array) => dispatch(favoritesAction(array)),
});

PostDetails.propTypes = {
  statePost: PropTypes.arrayOf(PropTypes.object),
  stateFavorites: PropTypes.arrayOf(PropTypes.object),
  dispatchFavorites: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
