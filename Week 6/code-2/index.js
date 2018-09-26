// Primjer 1
/*
function bar() {
  var foo = "baz";
}

function baz(foo) {
  foo = "bam";
  bam = "yay";
}

baz();

console.log(foo);
console.log(bam);*/

// sta ako dodamo "use strict";
// "use strict"; na nivou bloka ! ne mora na vrhu fajla

// Primjer 2
/*

var foo = "bar";
function bar(){
  
  var foo = "baz";

  function baz(foo){
    foo = "bam";
    bam = "yay";
  }

  baz();

}

bar();
console.log(foo);
console.log(bam);
//baz(); //Error
*/
// Primjer 3

var foo = function bar() {
  var foo = "baz";

  function baz(foo){
    foo = bar;
    console.log(foo);
  }
  baz();
}

foo();
// bar(); //Error
