// This following example demonstrates the asynchronicity of Promise.race
function primjer1() {
    // we are passing as argument an array of promises that are already resolved,
    // to trigger Promise.race as soon as possible
    var resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

    var p = Promise.race(resolvedPromisesArray);
    // immediately logging the value of p
    console.log(p);

    // using setTimeout we can execute code after the stack is empty
    setTimeout(function () {
        console.log('the stack is now empty');
        console.log(p);
    });

    // logs, in order:
    // Promise { <state>: "pending" }
    // the stack is now empty
    // Promise { <state>: "fulfilled", <value>: 33 }
}

// An empty iterable causes the returned promise to be forever pending
function primjer2() {
    var foreverPendingPromise = Promise.race([]);
    console.log(foreverPendingPromise);
    setTimeout(function () {
        console.log('the stack is now empty');
        console.log(foreverPendingPromise);
    });

    // logs, in order:
    // Promise { <state>: "pending" }
    // the stack is now empty
    // Promise { <state>: "pending" }
}

// If the iterable contains one or more non-promise value and/or an already resolved/rejected promise,
// then Promise.race will resolve to the first of these values found in the array:
function primjer3() {
    var foreverPendingPromise = Promise.race([]);
    var alreadyResolvedProm = Promise.resolve(666);

    var arr = [foreverPendingPromise, alreadyResolvedProm, "non-Promise value"];
    var arr2 = [foreverPendingPromise, "non-Promise value", Promise.resolve(666)];
    var p = Promise.race(arr);
    var p2 = Promise.race(arr2);

    console.log(p);
    console.log(p2);
    setTimeout(function () {
        console.log('the stack is now empty');
        console.log(p);
        console.log(p2);
    });

    // logs, in order:
    // Promise { <state>: "pending" } 
    // Promise { <state>: "pending" } 
    // the stack is now empty
    // Promise { <state>: "fulfilled", <value>: 666 }
    // Promise { <state>: "fulfilled", <value>: "non-Promise value" }
}

function primjer4() {
    var p1 = new Promise(function (resolve, reject) {
        setTimeout(resolve, 500, 'one');
    });
    var p2 = new Promise(function (resolve, reject) {
        setTimeout(resolve, 100, 'two');
    });

    Promise.race([p1, p2]).then(function (value) {
        console.log(value); // "two"
        // Both resolve, but p2 is faster
    });

    var p3 = new Promise(function (resolve, reject) {
        setTimeout(resolve, 100, 'three');
    });
    var p4 = new Promise(function (resolve, reject) {
        setTimeout(reject, 500, 'four');
    });

    Promise.race([p3, p4]).then(function (value) {
        console.log(value); // "three"
        // p3 is faster, so it resolves
    }, function (reason) {
        // Not called
    });

    var p5 = new Promise(function (resolve, reject) {
        setTimeout(resolve, 500, 'five');
    });
    var p6 = new Promise(function (resolve, reject) {
        setTimeout(reject, 100, 'six');
    });

    Promise.race([p5, p6]).then(function (value) {
        // Not called
    }, function (reason) {
        console.log(reason); // "six"
        // p6 is faster, so it rejects
    });
}