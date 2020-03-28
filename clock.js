// const title=document.querySelector("#title");

// const CLIKED_CLASS="clicked";
// function handleClick(){
// const hasClass=title.classList.contains(CLIKED_CLASS);
// if(!hasClass){
//     title.classList.add(CLIKED_CLASS);
// }else{
//     title.classList.remove(CLIKED_CLASS);
// }
//     title.classList.toggle(CLIKED_CLASS);
// }
// function init(){
//         title.addEventListener("click",handleClick);
// }
// init();
// function handleOnline(){
//     console.log("YOU ARE ONLINE!!")
// }
// window.addEventListener("online",handleOnline);

const clockContainer=document.querySelector(".js-clock");
const clockTitle=clockContainer.querySelector("h1");
function whatTime(){
    const date=new Date();
    const minutes=date.getMinutes();
    const hours=date.getHours();
    const seconds=date.getSeconds();
    clockTitle.innerText
    =`${hours<10 ? `0${hours}` : hours}:${
        minutes<10 ? `$0{minutes}`: minutes}:${
            seconds < 10 ? `0${seconds}` : seconds
    }`;
}
//     if(seconds<10){
//         clockTitle.innerText=`${hours}:${minutes}:0${seconds}`;
//     }else{
//     clockTitle.innerText=`${hours}:${minutes}:${seconds}`;
//     }
// }
function init(){
    whatTime();
    setInterval(whatTime, 1000);
}
init();