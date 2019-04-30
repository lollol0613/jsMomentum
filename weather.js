const COORDS_LS = 'coords';
const API_KEY = "c717502e75fa74974a8fdaca2ff04c4a";
const weather = document.querySelector(".js-weather");

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const coordsObj = {
        latitude,
        longitude
    };

    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}
function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(function(response){
        return response.json();
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @${place}`;
    });
}
function saveCoords(coordsObj) {
    localStorage.setItem(COORDS_LS, JSON.stringify(coordsObj));
}

function handleGeoError() {
    console.log("cannot access geo location")
}
function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}
function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS_LS);
    if(loadedCoords === null) {
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}
function init(){
   loadCoords();
}
init();