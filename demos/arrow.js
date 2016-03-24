"use strict";

function doIt() {

	console.dir(this);

	var h = () => {
		console.log(this);
	};

	h();

}

var o = {
	id: 2,
	doIt: doIt
};

o.doIt();
