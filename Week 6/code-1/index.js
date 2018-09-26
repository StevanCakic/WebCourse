//Primjer 1

function printMessage(message, times) {
  for (var i = 0; i < times; i++) {
    console.log(message);
  }
  console.log("Value of i is " + i); // koju ce vrijednost imaju i ?
}

printMessage("hello", 3);

// Primjer 2
function meaningless() {
  var x = 10;
  if (x > 0) {
    var y = 10;
  }
  console.log("Value of y is " + y); // zasto mozemo da pristupimo promjenljivoj y
}

meaningless();
//console.log("y is " + y); //zasto ovo baca gresku

// Primjer 3

/* Izmijenimo u prvom primjeru var i = 0 u let i = 0 */
/* Sta dobijamo? Zasto? */

// Primjer 4
/* Izmijenimo primjer 2 tako da var y = 10 bude const y = 10 */

// Primjer 5
const y = 10;
//y = 0; // error!
// y++; // error!
const list = [1, 2, 3];
list.push(4); // OKs
console.log(list);

const obj = { name: "Ime" };
obj.name = "Ime2";// Ok
console.log(obj.name);
