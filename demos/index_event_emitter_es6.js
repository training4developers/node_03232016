"use strict";

const
	util = require("util"),
	EventEmitter = require("events").EventEmitter;

class Person extends EventEmitter {

	constructor() {
		super();
	}

	get firstName() { return this._firstName; }
	set firstName(value) {
		let oldValue = this._firstName;
		this._firstName = value;
		this.emit("change", {
			fieldName: 'firstName',
			oldValue: oldValue,
			newValue: value
		});
	}

	get lastName() { return this._lastName; }
	set lastName(value) { this._lastName = value; }
}

console.log(typeof Person);

var p = new Person();
p.on("change", function(e) {
	console.dir(e);
});
p.firstName = "Bob";
console.log(p.firstName);

var p2 = new Person();
p2.firstName = "Jane";
console.log(p2.firstName);


console.log(`Person ${p.firstName} is a nice a person.`);
console.log("Person " + p.firstName + " is a nice a person.");
