setImmediate(function() {
	console.log("did 1");

	var p = new Promise(function(resolve) {
		resolve();
	});

	p.then(function() {
		console.log("promise");
	});

	process.nextTick(function() {
		console.log("next tick 1");
	});
},0);

setImmediate(function() {
	console.log("did 2");
	process.nextTick(function() {
		console.log("next tick 2");
	});
},0);

setImmediate(function() {
	console.log("did 3");
	process.nextTick(function() {
		console.log("next tick 3");
	});
},0);
