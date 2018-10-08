// Funkcije

// Funkcija za setovanje cookie-a
function setCookie(cname, cvalue, exdays){
    // kreiramo varijablu u kojoj cuvamo trenutni datum i vrijeme

    // uvecamo trenutni datum za exdays
    // mozemo da koristimo d.setTime i d.getTime

    // kreiramo promjenljivu u kojoj cuvamo "expires=${date}"
    // ali date u formatu UTC string
        // koristiti toUTCString

    // na kraju setovati document.cookie na
    // cname=cvalue;expires;'path=/'

}

// Funkcija za getovanje cookie-a
// cname je ime cookie-a koje trazimo
function getCookie(cname){
    // kreiramo promjenljivu u kojoj cuvamo cname + "=", tj. ime cookie i =

    // cuvati u promjenljivoj decode od document.cookie
    // za decode koristiti decodeURIComponent

    // razbijemo decodedCookies po ;

    // prolazimo kroz cookie
        // u promjenljivu cuvamo i-ti cookie

        // sve dok je prvi karakter u i-tom cookie == ' ' (da izjegnemo ' ')
            // preskoci prvi karakter
            // c = c.substring(1) npr
        // ako se ime cookie-a (definisali da pocetku funkcije) zapocinje cookie
        // c.indexOf(name) == 0
            // vrati vrijednost cookie-a
                // opet mozemo sa substring
                // prvi argument duzina imena cookie,
                // drugi argument duzina od i-tog cookie-a

    // ako dodjemo do kraja petlje a ne desi se return vrati ""
}

// Funkcija kojom provjeravamo da li je cookie sacuvan ili ne
function checkCookie(){
    // kreiramo promjenljivu u kojoj cuvamo username cookie 
    // koristiti getCookie("username") koju trebamo da kreiramo

    // Provjerimo da li user postoji
        // ako postoji stampati poruku `Dobrodosao ${user}`
        // ako ne postoji
            // traziti kroz prompt da user unese username
            // Ako username nije prazan string ili nije null
                // pozovemo setCookie("username", user, 30)
}

// pri ucitavanju stranice odma treba provjeriti cookie