function imgLoad(url) {
    // Create new promise with the Promise() constructor;
    // This has as its argument a function
    // with two parameters, resolve and reject
    return new Promise(function (resolve, reject) {
        // Standard XHR to load an image
        
        const request = new XMLHttpRequest();
        request.open('GET', url);
        request.responseType = 'blob';
        // When the request loads, check whether it was successful
        request.onload = function () {
            if (request.status === 200) {
                // If successful, resolve the promise by passing back the request response
                resolve(request.response);
            } else {
                // If it fails, reject the promise with a error message
                reject(Error('Image didn\'t load successfully; error code:' + request.statusText));
            }
        };
        request.onerror = function () {
            // Also deal with the case when the entire request fails to begin with
            // This is probably a network error, so reject the promise with an appropriate message
            reject(Error('There was a network error.'));
        };
        // Send the request
        request.send();
    });
}
// Get a reference to the body element, and create a new image object
const body = document.querySelector('body');
const myImage = new Image();
// Call the function with the URL we want to load, but then chain the
// promise then() method on to the end of it. This contains two callbacks
imgLoad('myLittleVader.jpg').then(function (response) {
    // The first runs when the promise resolves, with the request.response
    // specified within the resolve() method.
    
    console.log(response);
    const imageURL = window.URL.createObjectURL(response);
    
    console.log(imageURL);
    myImage.src = imageURL;

    body.appendChild(myImage);
    // The second runs when the promise
    // is rejected, and logs the Error specified with the reject() method.
}, function (Error) {
    console.log(Error);
});