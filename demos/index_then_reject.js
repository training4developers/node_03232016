"use strict";

var p = new Promise(function(resolve, reject) {
	reject("a");
});

p.then(function(results) {
	console.log("first then: " + results);
}, function(results) {
	console.log("first catch: " + results);
	return results;
}).then(function(results) {
	console.log("second then: " + results);
});
