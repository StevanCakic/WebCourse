function primjer1() {
    Promise.resolve('Success').then(function (value) {
        console.log(value); // "Success"
    }, function (value) {
        // not called
    });
}

function primjer2() {
    var p = Promise.resolve([1, 2, 3]);
    p.then(function (v) {
        console.log(v[0]); // 1
    });
}

// The inverted order of the logs is due to the fact that the then handlers are called asynchronously
function primjer3() {
    var original = Promise.resolve(33);
    var cast = Promise.resolve(original);
    cast.then(function (value) {
        console.log('value: ' + value);
    });
    console.log('original === cast ? ' + (original === cast));

    // logs, in order:
    // original === cast ? true
    // value: 33
}

function primjer4() {
    // Resolving a thenable object
    var p1 = Promise.resolve({
        then: function (onFulfill, onReject) { onFulfill('fulfilled!'); }
    });
    console.log(p1 instanceof Promise) // true, object casted to a Promise

    p1.then(function (v) {
        console.log(v); // "fulfilled!"
    }, function (e) {
        // not called
    });

    // Thenable throws before callback
    // Promise rejects
    var thenable = {
        then: function (resolve) {
            throw new TypeError('Throwing');
            resolve('Resolving');
        }
    };

    var p2 = Promise.resolve(thenable);
    p2.then(function (v) {
        // not called
    }, function (e) {
        console.log(e); // TypeError: Throwing
    });

    // Thenable throws after callback
    // Promise resolves
    var thenable = {
        then: function (resolve) {
            resolve('Resolving');
            throw new TypeError('Throwing');
        }
    };

    var p3 = Promise.resolve(thenable);
    p3.then(function (v) {
        console.log(v); // "Resolving"
    }, function (e) {
        // not called
    });
}