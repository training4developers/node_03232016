module.exports = function(config, cb) {

	"use strict";

	const
		EventEmitter = require("events").EventEmitter,
		express = require("express"),
		bodyParser = require("body-parser");


	class WebApp extends EventEmitter {

		constructor() {
			super();
			this._app = express();

			this._app.use("/api", bodyParser.json());
			this._app.use("/api", require("./routers/widgets"));

			this._app.use(express.static(config.webServer.folder));



		}

		get app() {
			return this._app;
		}

	}

	var webApp = new WebApp();

	return new Promise(function(resolve, reject) {
		webApp.app.listen(config.webServer.port, function(err) {

			if (err) {
				if (cb) cb(err);
				reject(err);
				return;
			}

			if (cb) {
				cb(null, {
					app: webApp,
					options: config
				});
			} else {
				resolve({
					app: webApp,
					options: config
				});
			}
		});
	});


}
