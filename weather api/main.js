// variable declaration
var place;
var input = document.querySelector(".find-location");
var inputV = document.querySelector("#find");
var container = document.querySelector(".forecast-table");
var err = document.getElementById('error');




// fetching data
function fetchData(p) {
    return new Promise((res, rej) => {
        var data = new XMLHttpRequest();
        data.open('GET', `http://api.apixu.com/v1/current.json?key=98272022398e46a48be45258190501&q=${p}`);
        data.onload = () => res(data);
        data.onerror = () => rej('oops')
        data.send();
    })
}
// userData
function userData(e) {
    e.preventDefault();
    var inputData = inputV.value;
    fetchData(inputData).then(
        data => {
            place = JSON.parse(data.response);
            display(place);
        })
    .catch(rej => alert(rej))
}

function display(place) {
    // ${place.location.name = 'Dharamsala'? `<img src="${we.jpg}" alt="" width=90>`:""}
    return container.innerHTML += `
    <div class="forecast-container">
    <div class="today forecast">
        <div class="forecast-header">
            <div class="day">${place.location.country}</div>
            <div class="date">${place.location.localtime}</div>
        </div> 
        <div class="forecast-content">
        <div class="location">${place.location.name}</div>
            <div class="location">${place.location.region}</div>
            <div class="degree">
                <div class="num">${place.current.temp_c}c</div>
                <div class="forecast-icon">
                    <img src="${place.current.condition.icon}" alt="" width=90>
                </div>
                <div class="forecast-icon">
                ${place.location.name == 'Dharamsala' ? `<img src="we.jpg" alt="" width=240>` : ""}
                </div>
            </div>
            <span>${place.current.cloud}</span>
            <span>${place.current.wind_kph} W-S</span>
            <span>${place.current.wind_dir} W-D</span>
        </div>
    </div>
</div>
    `
}
// // fun extra
// function d(place) {
//     return container.innerHTML = `
//     <div class="forecast-container">
//     <div class="today forecast">
//         <div class="forecast-header">
//             <div class="day">${place.location.country}</div>
//             <div class="date">${place.location.localtime}</div>
//         </div> 
//         <div class="forecast-content">
//         <div class="location">${place.location.name}</div>
//             <div class="location">${place.location.region}</div>
//             <div class="degree">
//                 <div class="num">${place.current.temp_c}c</div>
//                 <div class="forecast-icon">
//                     <img src="${place.current.condition.icon}" alt="" width=90>
//                     <img src="${we.jpg}" alt="" width=90>
//                 </div>
//             </div>
//             <span>${place.current.cloud}</span>
//             <span>${place.current.wind_kph} W-S</span>
//             <span>${place.current.wind_dir} W-D</span>
//         </div>
//     </div>
// </div>
//     `
// }




// event addEventListener
input.addEventListener('submit', userData)