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


// Primjer 3

// O ovome cemo puno detaljnije naknadno da govorimo u poglavlju higher order functions i closure
// Closure koncept ima niz prednosti koje cete uskoro vidjeti
function saberi(a) {
  return function(b) {
    return a + b;
  }
}

var sab3 = saberi(3);
console.log(sab3(5));

// Primjer 4 (defalt value)

function mult(a,b){
  var b = b || 5;
  return a * b;
}

console.log(mult(3));
console.log(mult(2,3));

