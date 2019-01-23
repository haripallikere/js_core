// variable declaration
let place;
let news;
const input = document.querySelector('.find-location');
const inputV = document.querySelector('#find');
const container = document.querySelector('.forecast-table');
const weather = document.querySelector('.weather-item');
const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
const displayLocation = [];



// userData

// weatherList();
// event addEventListener
input.addEventListener('submit', () => {
  userData();
  // userDataNews();
});
weather.addEventListener('click', weatherList);
