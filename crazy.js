"use strict";

var fs = require("fs");

fs.readFile("./LICENSE", function() {
	console.log("read file");
	process.nextTick(function() { console.log("read file: next tick"); });
});



process.nextTick(function() {

	console.log("next tick ran");

	setImmediate(function(msg) {
		console.log("immediate1 ran: " + msg);
		process.nextTick(function() { console.log("immediate1: next tick"); });
	}, "test");

	setImmediate(function(msg) {
		console.log("immediate2 ran: " + msg);
		process.nextTick(function() { console.log("immediate2: next tick"); });
	}, "test");

	setImmediate(function(msg) {
		console.log("immediate3 ran: " + msg);
		process.nextTick(function() { console.log("immediate3: next tick"); });
	}, "test");

	var p = new Promise(function(resolve) {
		console.log("run promise 1");
		resolve();
	});

	p.then(function() {
		console.log("promise1 resolved");
		process.nextTick(function() { console.log("promise1: next tick"); });
	});

	console.log("registered promise 1 then");



	setTimeout(function() {
		console.log("timeout ran");
		process.nextTick(function() { console.log("timeout: next tick"); });

		var p = new Promise(function(resolve) {
			console.log("run promise 2");
			resolve();
		});

		p.then(function() {
			console.log("promise2 resolved");
			process.nextTick(function() { console.log("promise2: next tick"); });

			var p = new Promise(function(resolve) {
				console.log("run promise 3");
				resolve();
			});

			p.then(function() {
				console.log("promise3 resolved");
				process.nextTick(function() { console.log("promise3: next tick"); });
			});
		});

		setTimeout(function() {
			console.log("timeout2 ran");
			process.nextTick(function() { console.log("timeout2: next tick"); });

		},0);

	},0);



	console.log("setup first tick done");

	process.nextTick(function() {
		console.log("first tick: next tick");
	});

	

});
