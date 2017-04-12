// var http = require('http');
// var PORT = 8080;

// function handleRequest(request, response){
// 	response.end("It Works! Path hit: "+request.url);
// }

// var server = http.createServer(handleRequest);

// server.listen(PORT, function(){
// 	console.log("Server listening on: http://localhost:%s", PORT);
// });

var http = require('http');
var PORT = 7000;
var PORT_2 = 7500;
var command = process.argv[2];

function handleRequestNice(request, response){
	response.end("You look like flowers today! server path: "+request.url);
}

var server = http.createServer(handleRequestNice);

server.listen(PORT, function(){
	console.log("Server is listening on: http://localhost:%s", PORT);
});

function handleRequestMean(request, response){
	response.end("You look like poop today! server path: "+request.url);
}

var server = http.createServer(handleRequestMean);

server.listen(PORT_2, function(){
	console.log("Server is listening on: http://localhost:%s", PORT_2);
});




