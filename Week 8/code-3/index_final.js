/* Parametari funkcije su ime 
    cookie-a (cname), 
    vrijednost cookie(cvalue)
    broj dana koliko cookie vazi (exdays)

    Funkcija setuje cookie dodavanjem zajedno cname,
    cvalue i exdays
*/

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

/**
 * Parametar funkcije je cookiename (cname)
 * Kreiramo varijablu name sa tekstom cname + "="
 * 
 * Dekodiramo cookie string, da obradimo cookie-e sa specijalnim
 * karakterima, npr. $
 * 
 * Splitujemo document.cookie na ; u niz ca
 * 
 * Prođemo kroz niz ca i učitamo svaki put vrijednost
 * 
 * Ako nađemo cookie (c.indexOf(name) == 0) trebamo da vratimo 
 * vrijednost cookie-a c.substring(name.length, c.length)
 * 
 * Ako ne nadjemo cookie, vrati ""
 */

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

/**
 * Na kraju kreiramo funkciju kojom provjeravamo da li je cookie
 * setovan. 
 * Ako jeste prikazi poruku dobrodosli $user
 * Ako nije prikazi prompt gdje trazimo od korisnika da unese
 *  ime koje ce biti sacuvano u cookie 30 dana
 */
function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 30);
        }
    }
}

// pri ucitavanju stranice odma treba prikazati provjeriti cookie
window.addEventListener("load", checkCookie);
