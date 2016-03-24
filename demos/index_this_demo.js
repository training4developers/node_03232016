"use strict";

function doIt(a,b) {
	console.dir(this);
	
}

var shoe = {
	size: 12,
	doIt: doIt
};

doIt();
shoe.doIt();
var y = new doIt();
doIt.call({ id: 3 }, 1, 2);
shoe.doIt.call({ id: 3 });
doIt.apply({ id: 4}, [1,2]);

var fn = doIt.bind({ id: 5}, 1);
fn(2);



//console.log(doIt === shoe.doIt);
