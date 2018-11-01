const url = "https://api.github.com/user";

function checkStatus(response) {
    if (response.status === 200) {
        return Promise.resolve(response);
    } else {
        
        return Promise.reject(new Error(response.statusText));
    }
}

function getJSON(response) {
    return response.json();
}

fetch(url)
    .then(checkStatus)
    .then(getJSON)
    .then(function (data) {
        console.log("Data ", data);
    })
    .catch(function (err) {
        console.log("Error ", err);
    })