"use strict";

var ttt = {
	id: 2,
	doIt: function() {
		console.dir(this);

		var t = 3;

		let hhh = () => {
			console.dir(this);
		};

		hhh();

	}
};

ttt.doIt();

var ggg = {
	id: 3,
	doIt: ttt.doIt
};

ggg.doIt();

console.log(ttt.doIt === ggg.doIt);
