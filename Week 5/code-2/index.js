var foo = "123";
var baz = foo - 0;
console.log(baz); // zasto nije u string?

baz = foo - "0";
console.log(baz); // foo i "0" su stringovi, kako moze rezultat da bude broj

baz = foo / 1; 
console.log(baz);

baz = 456;
foo = baz + "";
console.log(foo); // zasto sad string

foo = baz - "";
console.log(foo); // sad opet broj, ...?

foo = "123";
if(foo) { // sta se sada desava sa foo
    console.log("Sure!");
}

foo = 0;
if(foo) { // sta ce se desiti sada sa foo
    console.log("Right"); 
}

if(foo == false) {
    console.log("Radi. Zasto?")
}

baz = foo || "foo";
console.log(baz); // sta se sada desilo sa baz !?

foo = "123";
if(foo == true) { // au, kako sad ovo ne radi?
    /**
     * foo se konvertuje u broj prvo, pa se onda i true konvertuje u broj,
     * 123 === 1 nije tacno
     */
    console.log(foo);
}

foo = [];
if(foo) { // [] i {} su truthy
    console.log("Prolazi");
}

if(foo == false){
    /**
     * [] -> ""
     * "" -> false,
     * false === false
     */
    console.log("Kako se ovo desilo?")
}

