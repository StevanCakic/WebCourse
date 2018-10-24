(function(){
    function $(selector) {
        return document.querySelector(selector);
    }
    
    function $$(selector) {
        return document.querySelectorAll(selector);
    }
    
    function loadDoc() {
        const xhttp = new XMLHttpRequest();
    
        xhttp.addEventListener("readystatechange", function () {
            if (this.readyState == 4 && this.status == 200) {
                $("#demo").innerHTML = this.responseText;
            }
        })
        xhttp.open("GET", "data/demo_get.txt", true);
        xhttp.send();
    }
    
    $("#reqData").addEventListener("click", loadDoc);
})()
