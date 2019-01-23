function display() {
    var articles = (news.articles) ? news.articles[0].title : "no news Present";
  container.innerHTML += `
        <div class="forecast-container">
        <div class="today forecast">
            <div class="forecast-header">
            <button class="favorite">Add To Favorite</button>
                <div class="day">${place.location.country}</div>
                <div class="date">${place.location.localtime}</div>
            </div> 
            <div class="forecast-content">
            <div class="location">${place.location.name}
                </div>
                <div class="degree">
                    <div class="num">${place.current.temp_c}c</div>
                    <div class="forecast-icon">
                        <img src="${place.current.condition.icon}" alt="" width=90>
                    </div>
                </div>
                <div>
                <span>${place.current.cloud} speed</span>
                <span>${place.current.wind_kph} W-S</span>
                <span>${place.current.wind_dir} W-D</span>
                </div>
                 <div class="news">
                 ${articles}
                    </div>
            </div>
           
        </div>
    </div>
        `;
  const fav = document.querySelectorAll('.favorite');
  for (let i = 0; i < fav.length; i++) {
    fav[i].addEventListener('click', favList);
  }
}

function displayError(rej,n) {
  container.innerHTML += `
        <div class="forecast-container">
        <div class="today forecast">
        <div class="forecast-header">
        <p>${rej}${n}</p>
        </div> `;
}

