var url = require("url");
var http = require("http");
var fs = require("fs");

var PORT = 8080;

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
  console.log("Server listening on: http://localhost:%s", PORT);
});

function handleRequest(req, res) {

  var urlParts = url.parse(req.url);

  switch (urlParts.pathname) {
    case "/home":
      displayHome(urlParts.pathname, req, res);
      break;
    case "/food":
      displayFood(urlParts.pathname, req, res);
      break;
    case "/movies":
      displayMovies(urlParts.pathname, req, res);
      break;
    case "/css":
      displayCss(urlParts.pathname, req, res);
      break;
    default:
      display404(urlParts.pathname, req, res);
  }
}

function displayHome(url, req, res) {

	var myHTML = "<html>";
    myHTML += "<body><h1>Home Page</h1>";
    myHTML += "<a href='/food'>Food</a>";
    myHTML += "<a href='/movies'>Movies</a>";
    myHTML += "<a href='/css'>CSS</a>";
    myHTML += "</body></html>";
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(myHTML);

}

function displayFood(url, req, res){

	var myHTML = "<html>";
    myHTML += "<body><h1>Food</h1>";
    myHTML += "<a href='/home'>Home</a>";
    myHTML += "<li>Chips and Queso</li>";
    myHTML += "<li>Fries</li>";
    myHTML += "</body></html>";
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(myHTML);

}

function displayMovies(url, req, res){

	var myHTML = "<html>";
    myHTML += "<body><h1>Movies</h1>";
    myHTML += "<a href='/home'>Home</a>";
    myHTML += "<li>The Dark Knight</li>";
    myHTML += "<li>Rouge One</li>";
    myHTML += "</body></html>";
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(myHTML);

}

function displayCss(url, req, res){

	var myHTML = "<html>";
    myHTML += "<body><h1>CSS</h1>";
    myHTML += "<a href='/home'>Home</a>";
    myHTML += "<li>Bootstrap</li>";
    myHTML += "<li>Blah Blah</li>";
    myHTML += "</body></html>";
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(myHTML);

}

function display404(url, req, res) {
  res.writeHead(404, {
    "Content-Type": "text/html"
  });
  res.write("<h1>404 Not Found </h1>");
  res.end("The page you were looking for: " + url + " can not be found ");
}