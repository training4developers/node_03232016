"use strict";

var p = new Promise(function() {
	console.log("I ran, but I don't care...");
});

function timeoutResolvePromise(delay) {
	// return back a promise which rejects after the delay
	// time period
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			console.log("promise resolve occurred");
			resolve("promise resolve");
		}, delay);
	})

}

function timeoutPromise(delay) {
	// return back a promise which rejects after the delay
	// time period
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			console.log("promise expired occurred");
			reject("promise expired");
		}, delay);
	})

}

Promise.race([timeoutResolvePromise(2000), timeoutPromise(3000)])
	.then(function(results) {
		console.log(results);
	}).catch(function(results) {
		console.log(results);
	});
