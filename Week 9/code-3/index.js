// Primjer 1

try {
    adddlert("Welcome guest!");
}
catch (err) {
    console.log(err.message);
}

// Primjer 2
// Funkcija provjerava da li je parametar x u itervalu (5,10), ako nije javlja gresku
function myFunction(x) {
    try { 
        if(x == "") throw "empty";
        if(isNaN(x)) throw "not a number";
        x = Number(x);
        if(x < 5) throw "too low";
        if(x > 10) throw "too high";
    }
    catch(err) {
        console.log("Input is " + err);
    }
    finally{
        console.log("Finally block!");
    }
}

myFunction(4);
myFunction(6);
myFunction(11);
myFunction("abc");