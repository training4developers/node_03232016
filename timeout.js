var t = setTimeout(function() {
	console.log("all done");
}, 1000);

t.unref();
t.ref();

clearTimeout(t);
