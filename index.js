const title=document.querySelector("#title");

const BASE_COLOR="rgb(52, 73, 94)";
const OTHER_COLOR="red";

function handleClick(){
    const currentColor=title.style.color;
    if(currentColor===BASE_COLOR){
        title.style.color=OTHER_COLOR;
    }else{
        title.style.color=BASE_COLOR;
    }
    console.log(currentColor);
    console.log(BASE_COLOR);
    console.log(title.style.color);
}

function init(){
    title.style.color="black";
    title.addEventListener("click",handleClick);
}

init();

// function handleOnline(){
//     console.log("YOU ARE ONLINE!!")
// }

// window.addEventListener("online",handleOnline);

