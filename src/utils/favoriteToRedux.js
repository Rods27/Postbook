export default function favoriteToRedux(dispatchFavorites) {
  if(localStorage.pbfavorites) {
    const localStorageFavorites = JSON.parse(
      localStorage.getItem('pbfavorites')
    );
    dispatchFavorites(localStorageFavorites);
  }
}