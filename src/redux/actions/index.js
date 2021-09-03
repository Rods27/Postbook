export const FAVORITES = 'FAVORITES';
export const DETAILS = 'DETAILS';

export const favoritesAction = (array) => ({
  type: FAVORITES,
  array
});

export const detailsAction = (array) => ({
  type: DETAILS,
  array
});
