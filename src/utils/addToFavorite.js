export default async function addToFavorite(elem, dispatchFavorites, stateFavorites) {
  const localStorageStars = JSON.parse(localStorage.getItem('pbstars'));
  if(!stateFavorites.includes(elem)) {
    stateFavorites.push(elem);
    dispatchFavorites(stateFavorites);
    localStorageStars.push(elem.id);
    localStorage.setItem('pbstars', JSON.stringify(localStorageStars));
    localStorage.setItem('pbfavorites', JSON.stringify(stateFavorites));
  } else {
    const newStateFavorite = stateFavorites.filter((e) => e.id !== elem.id);
    dispatchFavorites(newStateFavorite)
    localStorage.setItem('pbfavorites', JSON.stringify(newStateFavorite));
    const newlocalStorageStars = localStorageStars.filter((e) => e !== elem.id);
    localStorage.setItem('pbstars', JSON.stringify(newlocalStorageStars));
  }
}