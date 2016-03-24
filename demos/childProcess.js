var spawn = require("child_process").spawn;

var dirList = spawn("ls", ["-al"]);

dirList.stdout.on("data", function(data) {
	console.log(data.toString("utf8"));
});
