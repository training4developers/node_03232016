"use strict";

const
	configApp = require("config-app"),
	defaultConfig = {
		webServer: {
			port: 3000,
			folder: "src/www"
		}
	};

	configApp("config.json", defaultConfig).then(function(options) {
		return require("./app")(options);
	}).then(function(results) {

		results.app.on("request", function() {
			console.log("a request was received");
		});

		console.log(`web server running on port ${results.options.webServer.port}`);
	}).catch(function(err) {
		console.log(err);
	});
	//
	// configApp("config.json", defaultConfig, function(err, options) {
	//
	// 	if (err) { return; }
	//
	// 	require("./app")(options, function(err, options) {
	//
	// 		if (err) { return; }
	//
	// 		console.log(`web server running on port ${options.webServer.port}`);
	// 	}).then(function() {
	// 		console.log("I love promises too!  And unicorns...");
	// 	});
	// });
