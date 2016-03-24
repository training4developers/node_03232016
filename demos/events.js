"use strict";

const EventEmitter = require("events").EventEmitter;

class Person extends EventEmitter {

	constructor() {
		super();

	}

	get firstName() {
		return this._firstName;
	}

	set firstName(value) {
		//setImmediate(() => {
			this._firstName = value;
			this.emit("change", {
				prop: "firstName",
				newValue: value
			});
		//});
	}

}

process.nextTick(function() {
	console.log("next tick");
});


var p = new Person();
p.on("change", function(e) {
	console.log("person change");
});

p.firstName = "Eric";
