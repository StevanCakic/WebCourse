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
	@time
	squareAll(arr) {
  	return arr.map(x => x*x);
  }
};

console.log(fns.squareAll(Array(1000).fill(4)));
