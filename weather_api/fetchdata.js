// weather api
function fetchDataWeather(p) {
  return new Promise((res, reject) => {
    const data = new XMLHttpRequest();
    data.open('GET', `http://api.apixu.com/v1/current.json?key=98272022398e46a48be45258190501&q=${p}`);
    data.onload = () => res(data);
    data.onerror = () => reject(new Error('something bad happened'));
    data.send();
  });
}
function userData() {
  // e.preventDefault();
  const inputWeather = inputV.value;
  if (displayLocation.includes(inputWeather)) { return; }
  fetchDataWeather(inputWeather).then(
    (data) => {
      console.log("1")
      place = JSON.parse(data.response);
      displayLocation.push(place.location.name.toLowerCase());
      // return new Promise((resolve,reject)=>{resolve();})
    },
  ).then(()=>{console.log("2"); return fetchDataNews()}).then(()=>{console.log("3");display()});
}

function userDataFav(v) {
  console.log('pop')
  // if (favorites.includes(v)) { return; }
  fetchDataWeather(v).then(
    (data) => {
      place = JSON.parse(data.response);
      display(place);
      displayLocation.push(place.location.name.toLowerCase());
    },
  )
    .catch(rej => displayError(rej));
}


// news api
function fetchDataNews() {
  return new Promise((res, reject) => {
    const w = inputV.value;
    const data = new XMLHttpRequest();
    data.open('GET', `https://newsapi.org/v2/everything?q=${w}&from=2018-12-12&sortBy=publishedAt&apiKey=820763b1fffa4f31a64ec05cc132e7ff&from=2019-01-01&sortBy=popularity`);
    data.onload = () =>{console.log(data);news = JSON.parse(data.response) ;res(data)};
    console.log(`https://newsapi.org/v2/everything?q=${w}&from=2018-12-12&sortBy=publishedAt&apiKey=820763b1fffa4f31a64ec05cc132e7ff`)
    data.onerror = () => reject(new Error('something bad happened'));
    data.send();

  });
}

function userDataNews() {
  // e.preventDefault();
  const inputNews = inputV.value;
  return fetchDataNews(inputNews).then(
    (data) => {
      news = JSON.parse(data.response);
    })
}