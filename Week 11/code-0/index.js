
fetch("https://api.github.com/users")
    .then(function(response) {
        console.log(response);
        return response.json();
    })
    .then(function(jsonData){
        console.log(jsonData);
    })