// 1. Predgled document objekta
/*
console.dir(document);
// Razlika izmedju log i dir, vidite li je?
console.log(document.URL); // url
console.log(document.title); // title

// mozete da mijenjate vrijednosti propertija document objekta !
// document.title = 123;
console.log(document.doctype); // tip dokumenta definisan u samom vrhu
console.log(document.head); // head element
console.log(document.body); // body element
console.log(document.all); // svi DOM elementi
console.log(document.all[10]); // deseti HTML element

document.all[10].textContent = "Hello"; // sta ce ovdje da se desi ?
// Ovo se ne radi ovako !

console.log(document.forms); // sve forme na stranici sacuvane u HTML kolekciji
// HTML kolekcije slicne kao niz ali nemaju sve metode kao nizovi, npr. reverse() ne radi
console.log(document.forms[0]); //pristup elementu niza

console.log(document.links); // svi linkovi sa stranice
console.log(document.images); //sve slike sa stranice
*/
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
/*
for(var i = 0; i < items.length; i++){
    items[i].style.backgroundColor = "blue";
}
*/

// items.style.background = "blue" //mozda ovako?
// Neeee

// c) getElementsByTagName
var li = document.getElementsByTagName("li");
// console.log(li);

// d) querySelector
var header = document.querySelector("#main-header");
/*

console.log(header);
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

// console.log(titles);
// videte li koji je tip podatka titles?


// Kako biste selektovali sve elemente koji imaju class name
// card i card-body

// console.log(document.querySelectorAll(".card, .card-body"));

/*
var odd = document.querySelectorAll("li:nth-child(odd)");
for(var i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = "grey";
}
*/
// 3. Obilazak DOMa
var itemList = document.querySelector("#items");
// parentNode
/*
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = "grey";

// mozete da trazite parent node od parent node od parent noda...
console.log(itemList.parentNode.parentNode);
*/

// parentElement
/*
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = "grey";
console.log(itemList.parentElement.parentElement);
*/

// childNodes

/*console.log(itemList.childNodes);
console.log(itemList.childNodes[0]);*/
// Odakle ovi tekst cvorovi?
// Kako da ih uklonimo?
// Ne preporucuje se u praksi zbog hvatanja tekst cvorova !

// children
// sta ako dodamo neki tekst prije prvog li elementa u ul?
/*
console.log(itemList.children);
console.log(itemList.children[0]);
itemList.children[0].style.backgroundColor = "yellow";
*/

// firstChild
// console.log(itemList.firstChild);

//firstElementChild
/* 
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = "Hello 1";
*/

// lastChild
// console.log(itemList.lastChild);

//lastElementChild
/*
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = "Hello 1";
*/

// nextSibling
//console.log(itemList.nextSibling);

// nextElementSibling
// console.log(itemList.nextElementSibling);
// Zasto null?
// Dodajmo u HTMLu da next sibling bude npr. span

// previousSibling
// console.log(itemList.previousSibling);

// previousElementSibling
/*
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = "green";
*/

// 4. Kreiranje DOM elemenata

// createElement

// Kreiranje praznog div-a
/*
var newDiv = document.createElement("div");

// Dodavanje klase
newDiv.className = "hello";

// Dodavanje id-a
newDiv.id = "hello1";

// Add attr
newDiv.setAttribute("title", "Hello Div");

console.log(newDiv); // kreiranje praznog div elementa
*/
// Kreiranje tekst cvora
/*
var newDivText = document.createTextNode("Hello World");

console.log(newDivText);

// Dodavanje teksta u div
newDiv.appendChild(newDivText);
*/
// Kako dodajemo element u DOM?
/*
// Selektujemo parent element u koji zelimo da dodamo novokreirani element
var container = document.querySelector("header .container");

// selektujemo element prije kog dodajemo novi element u parent node
var h1 = document.querySelector("header h1");

// dodamo taj element
container.insertBefore(newDiv, h1);

*/

// 5. Brisanje i Replace DOM elementa

// a) Brisanje
/*
var child = document.getElementsByClassName("list-group-item")[0];

child.parentNode.removeChild(child);
*/

// kako ovo jos mozete da zapisete ?

// b) Replace
/*
var parent = document.getElementById("items");
var child = parent.firstElementChild;
var para = document.createElement("li");
para.className = "list-group-item";
var node = document.createTextNode("This is new.");
para.appendChild(node);
parent.replaceChild(para, child);
*/

// Dodavanje i brisanje klasa sa elementa i contains metod

var items = document.getElementById("items");
var firstChild = items.firstElementChild;
//firstChild.classList.remove("list-group-item");
//firstChild.classList.add("list-group-item");

// Kako da provjerite da li element ima određenu klasu
console.log(firstChild.classList.contains("list-group-item"));

// Malo tezi primjer, rekurzivni obilazak DOMa
function walkTree(root, level) {
  if (root.nodeType === Node.TEXT_NODE) {
    console.log(level + "text:" + root.textContent);
  } else {
    console.log(level + root.nodeName);
  }
  for (const child of root.childNodes) {
    walkTree(child, level + " ");
  }
}

walkTree(document.querySelector("html"), "");
