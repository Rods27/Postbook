export default function favoriteToRedux(dispatchFavorites) {
  if(localStorage.favorites) {
    const localStorageFavorites = JSON.parse(
      localStorage.getItem('favorites')
    );
    dispatchFavorites(localStorageFavorites);
  }
}