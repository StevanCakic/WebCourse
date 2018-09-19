// Primjer 1

function add (a, b){
  return a + b;
}

var zbir = "Zbir je: " + add(3,4);
console.log(zbir);

// Primjer 2

var sub = function(a,b){
  return a - b;
}

var razlika = "Razlika je: " + sub(5,3);
console.log(razlika);

// Pa koja je razlika između function expression i function statement?
  // -- sta ako pozovete funkciju prije deklaracije
    // -- vidite li problem
    // o ovom problemu cemo detaljno govoriti u poglavlju Hoisting!


