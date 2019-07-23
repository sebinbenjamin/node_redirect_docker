var http = require('http');
var URL = "http://www.google.com";

var server = http.createServer(function(req, res) {
    res.writeHead(302, {'Location': URL + req.url});
	res.end();
	console.log("Redirected");
});

server.listen(9000);