"use strict";

const
	util = require("util"),
	EventEmitter = require("events").EventEmitter;

function Person() {
	EventEmitter.call(this);

	Object.defineProperty(this, "firstName", {
		get: () => {
			return this._firstName;
		},
		set: (value) => {
			this._firstName = value;
		}
	})

}

util.inherit(Person, EventEmitter);
