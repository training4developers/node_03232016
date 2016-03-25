"use strict";

let
	widgets = [ { id: 1, name: "Widget", color:"blue", size: "large" }],
	widgetRouter = require("express").Router();

widgetRouter.route("/widgets")
	.get(function(req, res) {
		res.json(widgets);
	})
	.post(function(req, res) {
		widgets.push(req.body);
		res.json({ success: true });
	});

widgetRouter.route("/widgets/:widgetId")
	.get(function(req, res) {
		res.json(findWidget(req.params.widgetId));
	})
	.put(function(req, res) {
		let widgetIndex = findWidgetIndex(req.params.widgetId);
		if (widgetIndex > -1) {
			widgets.splice(findWidgetIndex(req.params.widgetId),1);
			widgets.push(req.body);
			res.json({ success: true });
		} else {
			res.sendStatus(400);
		}
	})
	.delete(function(req,res) {
		let widgetIndex = findWidgetIndex(req.params.widgetId);
		if (widgetIndex > -1) {
			var deletedWidget = widgets.splice(,1);
			res.json(deletedWidget);
		} else {
			res.sendStatus(400);
		}
	});

module.exports = widgetRouter;

function findWidget(widgetId) {
	return widgets.filter(function(widget) {
		return widget.id === parseInt(widgetId, 10);
	})[0];
}

function findWidgetIndex(widgetId) {
	return widgets.indexOf(findWidget(parseInt(widgetId, 10)));
}
