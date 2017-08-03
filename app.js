//require http module for http server
var http = require('http');

//define port we want to listen to
const PORT = 4390;

//Create function which handles any request and sends simple response
function handleRequest (req, res){
    res.end('ngrok is working - Path hit!! ' + req.url.toString() );
    console.log(req.url);
}

//We create the web server object calling the createServer function. 
//Passing our request function onto createServer guarantees
//the function is called once for every HTTP request
//that's made against the server
var server = http.createServer(handleRequest);

//start the server
server.listen(PORT, function(){
    //callback triggered when server is successfully listening
    console.log('Server listening on: http://localhost:%s', PORT);
});