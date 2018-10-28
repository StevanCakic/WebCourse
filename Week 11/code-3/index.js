// Simple example
function primjer1() {
    var p1 = new Promise((resolve, reject) => {
        resolve('Success!');
        // or
        // reject ("Error!");
    });

    p1.then(value => {
        console.log(value); // Success!
    }, reason => {
        console.log(reason); // Error!
    });
}

// Following, an example to demonstrate the asynchronicity of the then method
function primjer2() {
    // using a resolved promise, the 'then' block will be triggered instantly, 
    // but its handlers will be triggered asynchronously as demonstrated by the console.logs
    const resolvedProm = Promise.resolve(33);

    let thenProm = resolvedProm.then((value) => {
        console.log("this gets called after the end of the main stack. the value received and returned is: " + value);
        return value;
    });
    // instantly logging the value of thenProm
    console.log(thenProm);

    // using setTimeout we can postpone the execution of a function to the moment the stack is empty
    setTimeout(() => {
        console.log(thenProm);
    });


    // logs, in order:
    // Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}
    // "this gets called after the end of the main stack. the value received and returned is: 33"
    // Promise {[[PromiseStatus]]: "resolved", [[PromiseValue]]: 33}
}

// If the function passed as handler to then returns a Promise, 
// an equivalent Promise will be exposed to the subsequent then in the method chain.
// The below snippet simulates asynchronous code with the setTimeout function

function primjer3() {
    Promise.resolve('foo')
        // 1. Receive "foo", concatenate "bar" to it, and resolve that to the next then
        .then(function (string) {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    string += 'bar';
                    resolve(string);
                }, 1);
            });
        })
        // 2. receive "foobar", register a callback function to work on that string
        // and print it to the console, but not before returning the unworked on
        // string to the next then
        .then(function (string) {
            setTimeout(function () {
                string += 'baz';
                console.log(string);
            }, 1)
            return string;
        })
        // 3. print helpful messages about how the code in this section will be run
        // before the string is actually processed by the mocked asynchronous code in the
        // previous then block.  
        .then(function (string) {
            console.log("Last Then:  oops... didn't bother to instantiate and return " +
                "a promise in the prior then so the sequence may be a bit " +
                "surprising");

            // Note that `string` will not have the 'baz' bit of it at this point. This 
            // is because we mocked that to happen asynchronously with a setTimeout function
            console.log(string);
        });

    // logs, in order:
    // Last Then: oops... didn't bother to instantiate and return a promise in the 
    // prior then so the sequence may be a bit surprising

    // foobar
    // foobarbaz
}

// When a value is simply returned from within a then handler, 
// it will effectively return Promise.resolve(<value returned by whichever handler was called>)
function primjer4() {
    var p2 = new Promise(function (resolve, reject) {
        resolve(1);
    });

    p2.then(function (value) {
        console.log(value); // 1
        return value + 1;
    }).then(function (value) {
        console.log(value + '- This synchronous usage is virtually pointless'); // 2- This synchronous usage is virtually pointless
    });

    p2.then(function (value) {
        console.log(value); // 1
    });
}

// A then call will return a rejected promise if the function throws an error or returns a rejected Promise.
function primjer5() {
    Promise.resolve()
        .then(() => {
            // Makes .then() return a rejected promise
            throw 'Oh no!';
        })
        .then(() => {
            console.log('Not called.');
        }, reason => {
            console.error('onRejected function called: ' + reason);
        });
}

// In all other cases, a resolving Promise is returned. In the following example, the first then() will return 42
// wrapped resolving Promise even though the previous Promise in the chain was rejected
function primjer6() {
    Promise.reject()
        .then(() => 99, () => 42) // onRejected returns 42 which is wrapped in a resolving Promise
        .then(solution => console.log('Resolved with ' + solution)); // Resolved with 42
}

// In practice, it is often desirable to catch rejected promises rather than use then's two case syntax, 
// as demonstrated below.
function primjer7() {
    Promise.resolve()
        .then(() => {
            // Makes .then() return a rejected promise
            throw 'Oh no!';
        })
        .catch(reason => {
            console.error('onRejected function called: ' + reason);
        })
        .then(() => {
            console.log("I am always called even if the prior then's promise rejects");
        });
}

// If onFulfilled returns a promise, the return value of then will be resolved/rejected by the promise.
function primjer8() {
    function resolveLater(resolve, reject) {
        setTimeout(function () {
            resolve(10);
        }, 1000);
    }
    function rejectLater(resolve, reject) {
        setTimeout(function () {
            reject(20);
        }, 1000);
    }

    var p1 = Promise.resolve('foo');
    var p2 = p1.then(function () {
        // Return promise here, that will be resolved to 10 after 1 second
        return new Promise(resolveLater);
    });
    p2.then(function (v) {
        console.log('resolved', v);  // "resolved", 10
    }, function (e) {
        // not called
        console.log('rejected', e);
    });

    var p3 = p1.then(function () {
        // Return promise here, that will be rejected with 20 after 1 second
        return new Promise(rejectLater);
    });
    p3.then(function (v) {
        // not called
        console.log('resolved', v);
    }, function (e) {
        console.log('rejected', e); // "rejected", 20
    });
}