import { FAVORITES } from '../actions';

const INITIAL_STATE = {
  favoritePosts: [],
};

export default function musics(state = INITIAL_STATE, action) {
  switch (action.type) {
  case FAVORITES:
  return {
    ...state,
    favoritePosts: action.array,
  };
  default:
    return state;
  }
}
