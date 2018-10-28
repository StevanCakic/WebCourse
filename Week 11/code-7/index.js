// Promise.all waits for all fulfillments (or the first rejection).
function primjer1() {
    var p1 = Promise.resolve(3);
    var p2 = 1337;
    var p3 = new Promise((resolve, reject) => {
        setTimeout(resolve, 100, 'foo');
    });

    Promise.all([p3, p1, p2]).then(values => {
        console.log(values); // ["foo", 3, 1337] 
    });
}

// If the iterable contains non-promise values, they will be ignored, 
//but still counted in the returned promise array value 
// (if the promise is fulfilled):
function primjer2() {
    // this will be counted as if the iterable passed is empty, so it gets fulfilled
    var p = Promise.all([1, 2, 3]);
    console.log(p);

    console.log('test');
    // this will be counted as if the iterable passed contains only the resolved promise with value "444", 
    // so it gets fulfilled
    var p2 = Promise.all([1, 2, 3, Promise.resolve(444)]);
    // this will be counted as if the iterable passed contains only the rejected promise with value "555", 
    // so it gets rejected
    var p3 = Promise.all([1, 2, 3, Promise.reject(555)]);

    // using setTimeout we can execute code after the stack is empty
    setTimeout(function () {
        console.log(p);
        console.log(p2);
        console.log(p3);
    });

    // logs
    // Promise { <state>: "fulfilled", <value>: Array[3] }
    // Promise { <state>: "fulfilled", <value>: Array[4] }
    // Promise { <state>: "rejected", <reason>: 555 }
}

// This following example demonstrates the asynchronicity 
// (or synchronicity, if the iterable passed is empty) of Promise.all

function primjer3() {
    // we are passing as argument an array of promises that are already resolved,
    // to trigger Promise.all as soon as possible
    var resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

    var p = Promise.all(resolvedPromisesArray);
    // immediately logging the value of p

    console.log(p);
    p.then(val => console.log(val));
    console.log('test');

    // using setTimeout we can execute code after the stack is empty
    setTimeout(function () {
        console.log('the stack is now empty');
        console.log(p);
    }, 0);

    // logs, in order:
    // Promise { <state>: "pending" } 
    // test
    // [33, 44]
    // the stack is now empty
    // Promise { <state>: "fulfilled", <value>: Array[2] }
}

// The same thing happens if Promise.all rejects

function primjer4() {
    var mixedPromisesArray = [Promise.resolve(33), Promise.reject(44)];
    var p = Promise.all(mixedPromisesArray);
    console.log(p);
    setTimeout(function () {
        console.log('the stack is now empty');
        console.log(p);
    });

    // logs
    // Promise { <state>: "pending" } 
    // the stack is now empty
    // Promise { <state>: "rejected", <reason>: 44 }
}

// But, Promise.all resolves synchronously if and only if the iterable passed is empty:
function primjer5() {
    var p = Promise.all([]); // will be immediately resolved
    var p2 = Promise.all([1337, "hi"]); // non-promise values will be ignored, but the evaluation will be done asynchronously
    console.log(p);
    console.log('test');
    console.log(p2)
    setTimeout(function () {
        console.log('the stack is now empty');
        console.log(p2);
    });

    // logs
    // Promise { <state>: "fulfilled", <value>: Array[0] }
    // Promise { <state>: "pending" }
    // the stack is now empty
    // Promise { <state>: "fulfilled", <value>: Array[2] }
}

// Promise.all is rejected if any of the elements are rejected.
// For example, if you pass in four promises that resolve after a timeout and
// one promise that rejects immediately, then Promise.all will reject immediately.

function primjer6() {
    var p1 = new Promise((resolve, reject) => {
        setTimeout(resolve, 1000, 'one');
    });
    var p2 = new Promise((resolve, reject) => {
        setTimeout(resolve, 2000, 'two');
    });
    var p3 = new Promise((resolve, reject) => {
        setTimeout(resolve, 3000, 'three');
    });
    var p4 = new Promise((resolve, reject) => {
        setTimeout(resolve, 4000, 'four');
    });
    var p5 = new Promise((resolve, reject) => {
        reject('reject');
    });

    Promise.all([p1, p2, p3, p4, p5]).then(values => {
        console.log(values);
    }, reason => {
        console.log(reason)
    });

    //From console:
    //"reject"

    //You can also use .catch
    Promise.all([p1, p2, p3, p4, p5]).then(values => {
        console.log(values);
    }).catch(reason => {
        console.log(reason)
    });

    //From console: 
    //"reject"
}

function primjer6() {
    // sta mislite sta predstavlja 3 argument kod setTimeout?
    var p1 = new Promise((resolve, reject) => {
        setTimeout(resolve, 1000, 'p1_delayed_resolvement');
    });

    var p2 = new Promise((resolve, reject) => {
        reject(new Error('p2_immediate_rejection'));
    });

    Promise.all([
        p1.catch(error => { return error }),
        p2.catch(error => { return error }),
    ]).then(values => {
        console.log(values[0]) // "p1_delayed_resolvement"
        console.log(values[1]) // "Error: p2_immediate_rejection"
    })
}

primjer5();