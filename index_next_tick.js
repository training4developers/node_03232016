"use strict";

setImmediate(function() {
	console.log("timeout 1 expired");
	process.nextTick(function() {
		console.log('timeout 1');
		setImmediate(function() {
			console.log("immediate 4");
		});
	});



},0);
setImmediate(function() {
	console.log("timeout 2 expired");
	process.nextTick(function() { console.log('timeout 2'); });
},0);
setImmediate(function() {
	console.log("timeout 3 expired");
	process.nextTick(function() { console.log('timeout 3'); });
},0);

// setImmediate(function() {
// 	console.log("immediate expired");
// });
