import { FAVORITES, DETAILS } from '../actions';

const INITIAL_STATE = {
  post: [],
  favoritePosts: [],
};

export default function musics(state = INITIAL_STATE, action) {
  switch (action.type) {
  case DETAILS:
    return {
      ...state,
      post: action.array,
    };
  case FAVORITES:
  return {
    ...state,
    favoritePosts: action.array,
  };
  default:
    return state;
  }
}
