"use strict";

//console.log("processing module");

console.log(exports === module.exports);

module.exports = {
	doSomething: function() {
		console.log("did something else!");
	}
}

exports.doSomething = function() {
	console.log("did it!");
};



// module.exports = function() {
//
// 	console.log("calling function");
//
// 	return {
// 		padLeft: function(str, len, ch) {
// 		  str = String(str);
// 		  var i = -1;
// 		  if (!ch && ch !== 0) ch = ' ';
// 		  len = len - str.length;
// 		  while (++i < len) {
// 		    str = ch + str;
// 		  }
// 		  return str;
// 		}
// 	};
//
// };
