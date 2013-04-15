//Node Module needed to create an http server, similar to import or include in any language
var http = require('http');

// The most important line in any Node file.  This function
// does the actual process of creating the server.  Technically,
// Node tells the underlying operating system that whenever a
// connection is made, this particular callback function should be
// executed.  Since we're creating a web service with REST API,
// we want an HTTP server, which requires the http variable
// we created in the lines above.
// Finally, you can see that the callback method receives a 'request'
// and 'response' object automatically.  This should be familiar
// to any PHP or Java programmer.

var objServer = http.createServer(function(req,res){

// The response needs to handle all the headers, and the return codes
// These types of things are handled automatically in server programs
// like Apache and Tomcat, but Node requires everything to be done yourself
res.writeHead(200, {'Content-Type':'text/plain'});

// Write the hello text  to response
res.write('Hello\n');

// Node requires us to explicitly end this connection.  This is because
// Node allows you to keep a connection open and pass data back and forth,
res.end('World\n');
});

// When we create the server, we have to explicitly connect the HTTP server to
// a port.  Standard HTTP port is 8 or you can specify yours, so we'll connect it to that one.
objServer.listen(2341);

// Output a String to the console once the server starts up, letting us know everything
// starts up correctly
console.log('Server running at http://localhost:2341/');
