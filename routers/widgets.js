module.exports = function(widgetsModel) {


	"use strict";

	let
		widgets = [ { id: 1, name: "Widget", color:"blue", size: "large" }],
		widgetRouter = require("express").Router();

	widgetRouter.route("/widgets")
		.get(function(req, res) {
			widgetsModel.getAll().then(function(results) {
				res.json(results);
			});
		})
		.post(function(req, res) {
			widgetsModel.insert(req.body);
			res.json({ success: true });
		});

	widgetRouter.route("/widgets/:widgetId")
		.get(function(req, res) {
			res.json(widgetsModel.get(req.params.widgetId));
		})
		.put(function(req, res) {
			try {
				widgetsModel.update(req.body);
				res.json({ success: true });
			} catch(err) {
				res.sendStatus(400);
			}
		})
		.delete(function(req,res) {
			try {
				res.json(widgetsModel.delete(req.params.widgetId));
			} catch(err) {
				res.sendStatus(400);
			}
		});

	return widgetRouter;

}
