let outer = document.getElementsByClassName('outer')[0];
let inner = document.getElementsByClassName('inner')[0];

let capture = {
    capture: true
};
let noneCapture = {
    capture: false
};
let once = {
    once: true
};
let noneOnce = {
    once: false
};

outer.addEventListener('click', noneOnceHandler, noneOnce);
// outer.addEventListener('click', onceHandler, once);
// outer.addEventListener('click', function(e) { captureHandler(e, "outer")}, capture);

inner.addEventListener('click', noneCaptureHandler, noneCapture);
// inner.addEventListener('click', (e) => captureHandler(e, "inner"), capture);

function onceHandler(event) {
    alert('outer, once');
}
function noneOnceHandler(event) {
    alert('outer, none-once, default');
}
function captureHandler(event, elem ) {
    event.stopPropagation();
    alert(`${elem}, capture, not-default`);
}
function noneCaptureHandler(event) {
    event.stopPropagation();
    alert('inner, none-capture, default');
}
