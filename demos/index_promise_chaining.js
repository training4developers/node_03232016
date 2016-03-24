"use strict";


var p = $q(function(resolve, reject) {

});

setTimeout(function() {
	d.resolve();
});

Q(function(resolve, reject) {
	setTimeout(function() {
		resolve();
	});
});

var p = new Promise(function(resolve, reject) {

	setTimeout(function() {
		resolve("Jin loves running!");
		//resolve("Hetal plays video games!");
		//reject("Stuart loves surfing!");
	}, 2000);

});

p.then(function(results) {
	console.log("success -> " + results);
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			resolve("its a nice day to run...")
		}, 5000);
		console.log("Jin is waiting in traffic");
	});
}).then(function(results) {
	console.log("next success");
	console.log(results);
}).catch(function(results) {
	console.log("error -> " + results);
});

console.log("waiting...");
