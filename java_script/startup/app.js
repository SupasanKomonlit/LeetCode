// FILE			: app.js
// AUTHOR		: K.Supasan
// CREATE ON	: 2019, July 10 (UTC+0)

// README

// REFERENCE

const http = require( 'http' )

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer( ( req , res ) => 
{
    res.statusCode = 200;
    res.setHeader( 'Content-Type' , 'text/plain' );
    res.end( 'Hello World\n' );
} );

server.listen( port , hostname , () => 
{
    console.log( 'Server running at http://${hostname}:${port}/' );
});
