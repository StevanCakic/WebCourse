// Primjer 1
var c = {greeting: "Hi"};
var d;

d = c;
c.greeting = "Hello";
console.log(c);
console.log(d);

// Primjer 2
function changeGreeting(obj){
    obj.greeting = "Hola";
}
changeGreeting(d);
console.log(c);
console.log(d);

// Primjer 3
c = {greeting: "howdy"};
console.log(c);
console.log(d);