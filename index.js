"use strict";

setImmediate(function() {
	console.log("timeout 1");
	process.nextTick(function() {
		console.log("tick 1");
	})
},0);

setImmediate(function() {
	console.log("timeout 2");
	process.nextTick(function() {
		console.log("tick 2");
	})
},0);

setImmediate(function() {
	console.log("timeout 3");
	process.nextTick(function() {
		console.log("tick 3");
	})
},0);
