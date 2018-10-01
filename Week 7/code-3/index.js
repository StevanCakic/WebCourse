// 1. Dodavanje itema

// Prvo nam treba forma u kojoj unosimo ime itema
// id - addForm

const form = document.getElementById("addForm");

// Treba nam container gdje se nalazi svi itemi
// id - items

const itemList = document.getElementById("items");

// Na submit forme gdje unosimo item treba da aktiviramo submit event
form.addEventListener("submit", addItem);

// Sada trebamo da kreiramo event handler za submit forme
// Event handler za dodavanje itema
function addItem(event) {

    // Na submit forme trebamo da onemogucimo default ponasanje forme
    // tj. da onemogucimo action na submit
    event.preventDefault();

    // Sada nam treba vrijednost iz input polja
    // koju smo unijeli
    // id - item
    const input = document.getElementById("item").value;
    // console.log(input);

    // Sledeci korak je kreiranje novog li itema
    const li = document.createElement("li");

    // Nakon toga li itemu trebamo dodati klasu 
    // class - list-group-item
    li.className = "list-group-item";

    // Nakon ovog trebamo da kreiramo text node
    // cija je vrijednost sacuvana u input polju
    // i da dodamo taj text node u li

    li.appendChild(document.createTextNode(input));

    // Potrebno je da kreiramo i delete button element
    const deleteBtn = document.createElement("button");

    // Potrebno je da dodamo klase za delete button
    // da bismo dobili adekvatan izgled
    // class - btn btn-danger btn-sm float-right delete

    deleteBtn.className = "btn btn-danger btn-sm float-right delete";

    // Potrebno je da dodamo na delete button text node "X"

    deleteBtn.appendChild(document.createTextNode("X"));

    // Sada moramo da dodamo deleteBtn u li
    li.appendChild(deleteBtn);

    // Nakon toga, potrebno je da dodamo
    // novokreirani li u listu itema
    itemList.appendChild(li);
}

// 2. Brisanje elemenata iz liste

// Na item list dodamo click event i event handler za brisanje itema
// U prvom koraku smo nasli item list !
itemList.addEventListener("click", removeItem);

// Sada trebamo da kreiramo event handler za brisanje itema
function removeItem(event) {

    // sad treba da provjerimo da li je user kliknuo na X
    // to mozemo da odradimo tako sto provjerimo da li
    // element koji smo kliknuli sadrzi klasu "delete"
    if (event.target.classList.contains("delete")) {
        // ako sadrzi pozvati confirm sa porukom "Jeste li sigurni"
        // - radimo detaljnije nakon testa
        // confirm vrace true/false
        if (confirm("Jeste li sigurni da zelite da uklonite item?")) {
            // trebamo da obrisemo li element
            // prvo selektujemo li
            // li je parent node elementa X, tj. targeta
            // parentElement
            const li = event.target.parentNode;

            // onda obrisemo selektovani li
            // iz parent noda, tj. lista itema (definisana globalno)
            // parent.removeChild(child)
            itemList.removeChild(li);
        }
    }
}

// 3. Filtriranje/pretraga elemenata

// prvo nam treba input polje za pretragu itema
// id - filter
const filter = document.getElementById("filter");

// Na filter input polje dodamo event "keyup" i event handler
filter.addEventListener("keyup", filterItems);

// Event handler za filtriranje itema
function filterItems(event) {
    // konvertovanje slova iz e.target.value u lowercase,
    // taj tekst cuvamo u varijablu 
    // lakse nam je da radimo pretragu
    const text = event.target.value.toLowerCase();

    // uzmemo sve li iteme iz liste itema, gore vec definisali
    // sve elemente moramo da sacuvamo u varijablu
    // mozemo da koristimo getElementsByTagName
    const liElements = itemList.getElementsByTagName("li");
    console.log(liElements);

    // Konvertujemo items HTMLCollection u Array
    const liArray = Array.from(liElements);
    console.log(liArray);


    // prolazimo kroz sve elemente niza

    liArray.forEach(function (item) {
        // iz svakog itema izvucemo text content
        // item.firstChild.textContent
        const itemText = item.firstChild.textContent;
        // provjerim da li se uneseni tekst nalazi u item text
        // Napomena: i item names moraju biti mala slova
        // Najjednostavnije koristiti indexOf za provjeru da li 
        // se string nalazi u stringu, != -1 ako jeste

        if (itemText.toLowerCase().indexOf(text) != -1) {
            // ako jeste, item.style.display = "block"
            item.style.display = "block";
        } else {
            // ako nije, item.style.display = "none"
            item.style.display = "none";

        }

    })

}
