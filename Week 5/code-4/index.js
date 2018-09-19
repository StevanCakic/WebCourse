// Primjer 1

var i = 0;
var text = "";
var len;

while (i <= 10) {
  text += " The number is " + i;
  i++;
}

console.log(text);

// Primjer 2

let cars = ["Auto 1", "Auto 2", "Auto 3", "Auto 4", "Auto 5"];

i = 0;
text = "";
for (i = 0; i < cars.length; i++) {
  text += "Auto: " + cars[i] + ";";
}

console.log(text);

// Primjer 3

for (i = 0, len = cars.length, text = ""; i < len; i++) {
  // koji je redosled izvrsavanja ovih operacija?
  text += cars[i] + " ... ";
}

console.log(text);

// Primjer 4

for (var i = 0, text = ""; i < 10; i++) {
  if (i === 3) {
    break;
  }
  text += "The number is " + i + "<br>";
}

console.log(text);

// Primjer 5

for (var i = 0, text = ""; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text += "The number is " + i + "<br>";
}

// for (;i < cars.length;i++) {} - ako je i vec definisano prije
// for (;i < cars.length;) { i++ } - ne preporucuje se
// for (;;) - infinite loop
