"use strict";

const
	fs = require("fs");

fs.readFile("first.js", "utf-8", function(err, data) {

	if (err) {
		console.log("something did not work out right...");
		return;
	}

	console.log(data);

});

var obj = {
	title: "Shining Stars At Intuit!",
	stars: ["Hitesh", "Jin", "Abhinith"],
	excellencyRating: 110
};

var json = JSON.stringify(obj);

console.dir(JSON.parse(json));
