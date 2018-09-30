let outer = document.getElementsByClassName('outer')[0];
let middle = document.getElementsByClassName('inner')[0];

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

middle.addEventListener('click', noneCaptureHandler, noneCapture);
// middle.addEventListener('click', captureHandler, capture);

function onceHandler(event) {
    alert('outer, once');
}
function noneOnceHandler(event) {
    alert('outer, none-once, default');
}
function captureHandler(event) {
    //event.stopPropagation();
    alert('inner, capture');
}
function noneCaptureHandler(event) {
    alert('inner, none-capture, default');
}
