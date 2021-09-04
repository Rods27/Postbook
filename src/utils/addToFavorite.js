export default async function addToFavorite(elem, dispatchFavorites, stateFavorites) {
  const localStorageStars = JSON.parse(localStorage.getItem('stars'));
  if(!localStorageStars.includes(elem.id)) {
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
}