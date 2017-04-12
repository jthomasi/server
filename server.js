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
var command = process.argv[2];

if (command == "1"){

	var PORT = 7000;

	function handleRequest(request, response){
		response.end("You look like flowers today! server path: "+request.url);
	}

	var server = http.createServer(handleRequest);

	server.listen(PORT, function(){
		console.log("Server is listening on: http://localhost:%s", PORT);
	});

}

else if (command == "2"){

	var PORT = 7500;

	function handleRequest(request, response){
		response.end("You look like poop today! server path: "+request.url);
	}

	var server = http.createServer(handleRequest);

	server.listen(PORT, function(){
		console.log("Server is listening on: http://localhost:%s", PORT);
	});

}

else {
	console.log("Enter a proper command");
}


