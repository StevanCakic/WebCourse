// Primjer 1
/*
var foo = "foo";

function bob() {
  var foo = "foo2";
  console.log(foo); // trazi ono foo iz najblizeg Scope-a !
}

bob();
console.log(foo);
*/
// Primjer 2
// IIFE
/*
(function bob() {
  // ova funkcija ce odma da se pozove
  var foo = "foo2";
  console.log(foo);
})();

console.log(foo);*/

// Primjer 3
(function IIFE(bar) {
  // ova funkcija ce odma da se pozove
  var foo = "foo2";
  console.log(foo);
  console.log(bar);
  
})(foo);

console.log()

