// String <-> Number

var foo = "123";
var baz = parseInt(foo,10);
console.log(baz);

baz = Number(foo);
console.log(baz);

baz = +foo; //explicit coercion?
console.log(baz);

baz = 456;
foo = baz.toString();
console.log(foo);

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