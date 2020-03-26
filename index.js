const title=document.querySelector("#title");

const CLIKED_CLASS="clicked";

function handleClick(){
    const hasClass=title.classList.contains(CLIKED_CLASS);
    if(!hasClass){
        title.classList.add(CLIKED_CLASS);
    }else{
        title.classList.remove(CLIKED_CLASS);
    }
}

function init(){
        title.addEventListener("click",handleClick);
}

init();

// function handleOnline(){
//     console.log("YOU ARE ONLINE!!")
// }

// window.addEventListener("online",handleOnline);

