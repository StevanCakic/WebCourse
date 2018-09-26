// 1. Predgled document objekta propertija

// console.dir(document);
console.log(document.URL); // url 
console.log(document.title); // title

// mozete da mijenjate vrijednosti propertija document objekta !
// document.title = 123; 
console.log(document.doctype); // tip dokumenta definisan u samom vrhu
console.log(document.head); // head element
console.log(document.body); // body element
console.log(document.all); // svi DOM elementi
console.log(document.all[10]); // deseti HTML element

// document.all[10].textContent = "Hello"; // sta ce ovdje da se desi ?
// Ovo se ne radi ovako !

console.log(document.forms); // sve forme na stranici sacuvane u HTML kolekciji
// HTML kolekcije slicne kao niz ali nemaju sve metode kao nizovi, npr. reverse() ne radi
console.log(document.forms[0]); //pristup elementu niza

console.log(document.links); // svi linkovi sa stranice
console.log(document.images); //sve slike sa stranice

// 2. Traženje HTML elemenata
// a) getElementById
// console.log(document.getElementById("header-title")); // trazimo element po IDu
var headerTitle = document.getElementById("header-title");

/*
console.log(headerTitle);

console.log(headerTitle.textContent);
console.log(headerTitle.innerText);

headerTitle.innerHTML = "<h3>Hello</h3>"; // dodavanje HTML h3 u headerTitle

headerTitle.style.borderBottom="solid 3px #000"; // camel case umjesto - 

*/

// b) getElementsByClassName
var items = document.getElementsByClassName("list-group-item");