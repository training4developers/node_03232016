"use strict";

const
	Q = require("q");


setImmediate(function() {

	process.nextTick(() => { console.log("first tick"); });

	let
		d = Q.defer();

	d.resolve();

	d.promise.then(function() {
		console.log("q resolved");
	});

	var p = new Promise(function(resolve, reject) {
		resolve();
	});

	p.then(function() {
		console.log("p resolved");
	});
});
