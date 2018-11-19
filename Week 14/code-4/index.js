function memoize(target, key, descriptor) {
    const origFn = descriptor.value.bind(target);
    const prevs = {};

    descriptor.value = function(...args) {
        if(prevs[args.toString()]) {
            return prevs[args.toString()]
        }
        return prevs[args.toString()] = origFn(...args);
    }
}

function time(target, key, descriptor) {
	const origFn = descriptor.value.bind(target);
  
  let i = 0;
  descriptor.value = function (...args) {
  	let id = i++;
  	console.time(key + id);
    let value = origFn(...args);
  	console.timeEnd(key + id);
  	return value;
  };
}

const fns = {
    @time // iz prethodnog primjera
    @memoize // a bez memoize?
    fib(n) {
        if(n <= 0) return 0;
        if (n === 1) return 1;
        return this.fib(n-1) + this.fib(n-2);
    }
}

console.log(fns.fib(20));