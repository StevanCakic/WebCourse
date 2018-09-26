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
// console.log(items);// HTML collection
// console.log(items[1]);

// Napomena, HTML elementi najčešće se imenuju pomoću klasa
// document.getElementsByClassName("list-group-item")[0]
/* items[1].textContent = "Hello 2";
items[1].style.fontWeigth = "bold";
items[1].style.backgroundColor = "yellow";
*/

// Kako bismo sada promijenilo bacground color
// svim itemima u plavu ?

// items.style.background = "blue" //mozda ovako?

// c) getElementsByTagName
var li = document.getElementsByTagName("li");
// console.log(li);

// d) querySelector
var header = document.querySelector("#main-header");
console.log(header);

/*
var input = document.querySelector("input");
input.value = "Hello World";

var submit = document.querySelector('input[type="submit"]');
submit.value = "SEND";

var item = document.querySelector(".list-group-item");
item.style.color = "red";

var lastItem = document.querySelector(".list-group-item:last-child");
lastItem.style.color = "blue";

var secondItem = document.querySelector(".list-group-item:nth-child(2)");
secondItem.style.color = "coral";
*/

// e) querySelectorAll
var titles = document.querySelectorAll(".title");
console.log(titles);
// videte li koji je tip podatka titles?
// isto kao HTML collection, osim sto podržava
// pozivanje metoda nizova !
/*
var odd = document.querySelectorAll("li:nth-child(odd)");
for(var i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = "grey";
}*/