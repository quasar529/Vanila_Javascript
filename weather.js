const API_KEY="20dd54e163bbd3575a7ed6ddb7994735";
const COORDS='coords';

const weather=document.querySelector(".js-weather");
function getWeather(lat,lon){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        ).then(function(response){
            return response.json();
        }).then(function(json){
            const temperature=json.main.temp;
            const place=json.name;
            const des=json.weather[0].description;
            weather.innerText=`${temperature}°C ${des} @ ${place}`;
        });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));

}

function handleGeoSucces(position){
    const latitude=position.coords.latitude;
    const longitude=position.coords.longitude;
    const coordsObj={
        latitude,
        longitude
    };   
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

function handleGeoError(){
    console.log("Cannot access geo location");
}
function askForCords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError);
}

function loadCoords(){
    const loadedCords=localStorage.getItem(COORDS);
    if(loadedCords===null){
        askForCords();
    }else{
        const parseCoords=JSON.parse(loadedCords);
        getWeather(parseCoords.latitude, parseCoords.longitude);

    }
}
function init(){
    loadCoords();
}
init();