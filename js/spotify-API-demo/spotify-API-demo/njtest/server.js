// console.log('whatup, fam?')

// var express = require('express');
// var myModule = require('./module');
// var app = express();

// // 
// app.get('/api/lyric', function (req, res) {
//   res.send(myModule.randomQuote());
// });

// app.get('/api/lyrics', function (req, res) {
//   res.send(myModule.quotes);
// });


// var server = app.listen(3000, function () {
  
//   var port = server.address().port;
//   console.log('Example app listening at http://localhost:%s', port);
// });

// //lab22
// app.use(express.static(__dirname + '/public')); 

/* Load the HTTP library */
var http = require("http");

/* Create an HTTP server to handle responses */
http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Whatup, Fam?");
  response.end();
}).listen(8888);