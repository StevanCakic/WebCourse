var foo = [];
var baz = "";

if(foo == baz){ //sta se desava u ovom slucaju, pogledati algoritam
    console.log("Prolazi 1");
}

if(foo === baz){
    console.log("Ne radi. OK");
}

foo = 0;
if(foo == ""){ // pogledati algoritam za ==
    console.log("Prolazi 2");
}
if(foo === ""){
    console.log("Ne radi. Jasno zasto")
}

// Primjer kada je korisno koristiti ==
foo = "3";

if(foo === 3 || foo === "3") {
    console.log("Radi ali imam provjeru viska");
}

if(foo == 3){
    console.log("Zar ne izgleda ljepse");
}

if(typeof foo === "string") {
    console.log("typeof ce da vrati string");
}

// Neki problematicni primjeri
var newFoo;
if(newFoo == null) {
    console.log("Prolazi 3")
}

newFoo = null;
if(newFoo == null) {
    console.log("Prolazi OK opet");
}

newFoo = false;
if(newFoo == null) { //zasto ovo ne radi
    // null ne moze da se poredi sa 0 ili sa 1 !
    console.log("Ao, ne radi")
}

if(newFoo == +null) { //zasto ovo radi
    console.log("Ao, radi");
}

if(newFoo == +undefined) {
    console.log("Ne radi ni ovo!")
}

// A performanse
// Ako je tip podatka sa lijeve i desne strane jednakosti isti
// performanse iste kao ===
var x = 2;
var y = 2;
var z = "2";

x == y; // isto
x == z; // sporije

x === y; // isto kao ==
x === z; // isto kao x === y, brze od x == z 
         // ali vrace false, a mozda nam treba true

// Sta radi ovo i zbog cega se ovo radi !!
// Da li je ovo explicit ili implicit coercion
console.log(!!"abc");