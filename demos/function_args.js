"use strict";

function ttt(a,b,...c) {
	console.log(a,b,c);
	//console.dir(arguments);
}

var a = [1,2,3,4];

ttt(...a);

//$("div").html();
