"use strict";

const
	mongoose = require("mongoose");
	WidgetModel = require("../mongoose/widget");

let
	widgets = [];

module.exports = {
	getAll: function() {
		return new Promise(function(resolve, reject) {
			WidgetModel.find({ _id: "idvalue" }, function(err, results) {
				if (err) {
					reject(err);
					return;
				}
				resolve(results);
			});
		});
	},
	get: function(widgetId) {
		return findWidget(widgetId);
	},
	insert: function(widget) {
		widgets.push(widget);
	},
	update: function(widget) {
		let widgetIndex = findWidgetIndex(widget.id);
		if (widgetIndex > -1) {
			widgets.splice(widgetIndex,1);
			widgets.push(widget);
			return true;
		} else {
			throw Error("widget not found");
		}
	},
	delete: function(widgetId) {
		let widgetIndex = findWidgetIndex(widgetId);
		if (widgetIndex > -1) {
			var deletedWidget = widgets.splice(widgetIndex,1);
			return deletedWidget;
		} else {
			throw Error("widget not found");
		}
	}
};

function findWidget(widgetId) {
	return widgets.filter(function(widget) {
		return widget.id === parseInt(widgetId, 10);
	})[0];
}

function findWidgetIndex(widgetId) {
	return widgets.indexOf(findWidget(parseInt(widgetId, 10)));
}
