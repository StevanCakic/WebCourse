function buttonClick() {
    console.log("Button Clicked!");
    // document.getElementById("header-title").textContent = "Changed"
    // document.querySelector("#main").style.backgroundColor = "grey";
}


// 2. Dodavanje eventa

// Prvi korak
var button = document.getElementById("button");

// Drugi korak
/*button.addEventListener("click", function () {
    console.log(123);
})*/

// Zasto ovo nije bas dobro, tj. da je event handler
// anonimna funkcija ?

// Kako biste zakacili funkciju buttonClick
// na button ?

// 3. Uklanjanje eventa
// button.addEventListener("click", buttonClick);
// button.removeEventListener("click", buttonClick);
// Zasto ovo ne radi ?

// Kako da proradi?

// 4. Event parametar
function buttonClicked(e) {
    console.log(e);
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.classList);
    var output = document.getElementById("output");
    output.innerHTML = `<h3> ${e.target.id} </h3>`;

    console.log(e.type);

    console.log(e.clientX);

    console.log(e.clientY)

    // Kako da stampate vrijednost za clientY
    // ako kliknete bilo gdje u pretrazivacu ?

    console.log(e.offsetX);
    console.log(e.offsetY);

    console.log(e.altKey);
    console.log(e.ctrlKey);
    console.log(e.shiftKey);
}

// sta se desi ako ovu funkciju dodamo
// na button

// button.addEventListener("click", buttonClicked);


// 5. Basic mouse events

// button.addEventListener("click",runMouseEvent);
// button.addEventListener("dblclick", runMouseEvent);
// button.addEventListener("mousedown", runMouseEvent);
// button.addEventListener("mouseup", runMouseEvent);

// 6. Some more advanced mouse events


var box = document.getElementById("box");
// box.addEventListener("mouseenter",runMouseEvent);
// box.addEventListener("mouseleave",runMouseEvent);

// box.addEventListener("mouseover",runMouseEvent);
// box.addEventListener("mouseout",runMouseEvent);

// box.addEventListener("mousemove", runMouseEvent);


function runMouseEvent(e) {

    console.log("Event type: " + e.type);
    // Za 6. dio makni komentare
     var output = document.getElementById("output");
    output.innerHTML = `<h3>MouseX: ${e.offsetX} </h3><h3>MouseY: ${e.offsetY} </h3>`

    var box = document.getElementById("box");
    box.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY}, 40)`;
    // document.body.backgroundColor = `rgb(${e.offsetX},${e.offsetY}, 40)`;
    
}

// 7. Keyboard events

var itemInput = document.querySelector("input[type='text']");
var form = document.querySelector("form");

// itemInput.addEventListener("keydown", runKeyboardEvent);
// itemInput.addEventListener("keyup", runKeyboardEvent);
// sta ako drzim key
// itemInput.addEventListener("keypress",runKeyboardEvent);


// 8. More keyboard events

// itemInput.addEventListener("focus", runKeyboardEvent);
// itemInput.addEventListener("blur", runKeyboardEvent);

// itemInput.addEventListener("cut", runKeyboardEvent);
// itemInput.addEventListener("paste", runKeyboardEvent);

// 9. More events


// itemInput.addEventListener("input", runKeyboardEvent);
var select = document.querySelector("select");
// select.addEventListener("change", runKeyboardEvent);
// select.addEventListener("input", runKeyboardEvent);
// form.addEventListener("submit", runKeyboardEvent);

function runKeyboardEvent(e) {
    // Za 9. dio makni komentar
    e.preventDefault();
    console.log("Event type: " + e.type);
    console.log(e.target.value);
    // Za 7. dio makni komentar
    // document.getElementById("output").innerHTML = "<h3>" + e.target.value + "</h3>"
    
    // Zadatak 1
    // TODO
    /*
    if(e.keyCode === 65){
        alert("Neko je unio slovo a");
    }*/
    
    // Zadatak 2
    // TODO
    /*
    if(e.type === "cut"){
        const body = document.getElementsByTagName("body")[0];
        body.style.display = "none";
    }*/
}