function favList() {
  if (favorites.includes(place.location.name)) return;
  favorites.push(place.location.name);
  localStorage.setItem('favorites', JSON.stringify(favorites));
}

function weatherList(e) {
  e.preventDefault();
  for (let i = 0; i < favorites.length; i++) {
    var favi = favorites[i]
    userDataFav(favi);
  }
}