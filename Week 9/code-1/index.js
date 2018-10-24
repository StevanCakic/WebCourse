function waitTreeSeconds(){
    var ms = 3000 + new Date().getTime();
    while((new Date()).getTime() < ms){    }
    console.log("Finished function");
}

function clickHandler(){console.log('click event');}

document.addEventListener("click",clickHandler);
waitTreeSeconds();
console.log("finished execution");