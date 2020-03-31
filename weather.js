const COORDS='coords';

function handleGeoSucces(position){
    console.log(position);
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

    }
}
function init(){
    loadCoords();
}
init();