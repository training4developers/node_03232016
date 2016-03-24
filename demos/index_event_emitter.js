"use strict";

const
	util = require("util"),
	EventEmitter = require("events").EventEmitter;

function Person() {
	EventEmitter.call(this);
}

util.inherits(Person, EventEmitter);

Object.defineProperty(Person.prototype, "firstName", {
	get: function() {
		return this._firstName;
	},
	set: function(value) {
		let oldValue = this._firstName;
		this._firstName = value;
		this.emit("change", {
			fieldName: 'firstName',
			oldValue: oldValue,
			newValue: value
		});
	}
});

Object.defineProperty(Person.prototype, "lastName", {
	get: function() {
		return this._lastName;
	},
	set: function(value) {
		let oldValue = this._lastName;
		this._lastName = value;
		this.emit("change", {
			fieldName: 'lastName',
			oldValue: oldValue,
			newValue: value
		});
	}
});

var p = new Person();
p.on("change", function(e) {
	console.dir(e);
});
p.firstName = "Bob";
console.log(p.firstName);

var p2 = new Person();
p2.firstName = "Jane";
console.log(p2.firstName);
