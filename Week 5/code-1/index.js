// String <-> Number

var foo = "123";
var baz = parseInt(foo,10);
console.log(baz);

baz = Number(foo);
console.log(baz);

baz = +foo; //explicit coercion?
console.log(baz);

var baz = 456;
var newBaz = baz.toString();
console.log(newBaz);

foo = String(baz);
console.log(foo);

// * -> Boolean
var foo = "123";
var baz = Boolean(foo);
console.log(baz);

baz = !!foo;
console.log(baz);

var foo = "foo";
// ~N -> -(N + 1)
if(~foo.indexOf("f")){
    console.log("Fount it!");
}