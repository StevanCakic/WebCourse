let isLoading = true;
let myRequest = "https://jsonplaceholder.typicode.com/todos";

fetch(myRequest).then(function (response) {
    var contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
        return response.json();
    }
    throw new TypeError("Oops, we haven't got JSON!");
})
    .then(function (jsonData) { console.log(jsonData)/* process your JSON further */ })
    .catch(function (error) { console.log(error); })
    .finally(function () { isLoading = false; });