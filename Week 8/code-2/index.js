function myFunction() {
    alert("Hello");
}

function myInterval() {
    console.log("Execute function");
}

const intervalButton = document.getElementsByClassName("intervalClass")[0];
const intervalCancelButton = document.getElementsByClassName("cancelIntervalClass")[0];

let intervalVariable;


intervalButton.addEventListener("click", function () {
    intervalVariable = setInterval(myInterval, 1000);
})

intervalCancelButton.addEventListener("click", function () {
    clearTimeout(intervalVariable);
})

const myClock = setInterval(updateClock, 1000);

function updateClock() {
    const d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}

// Motivacija za sledeci cas

/*
setTimeout(function () {
    console.log("Kad se ovo stampa?");
}, 0)

console.log("A ovo?");
*/