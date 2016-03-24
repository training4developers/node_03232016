"use strict";

function createPromise(resolveMsg, rejectMsg, willResolve, delay) {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			if (willResolve) {
				console.log(resolveMsg + " was resolved");
				resolve(resolveMsg);
			} else {
				console.log(rejectMsg + " was rejected");
				reject(rejectMsg);
			}
		}, delay);
	});
}

var
	p1 = createPromise("resolve a", "reject a", true, 2000),
	p2 = createPromise("resolve b", "reject b", true, 4000),
	p3 = createPromise("resolve c", "reject c", true, 6000),
	p4 = createPromise("resolve d", "reject d", true, 8000);

Promise.all([p1, p2, p3, p4]).then(function(results) {
	console.dir(results);
	console.log("success");
});
