
const Logger = require('./logger');
const path = require("path");
const os = require("os");
const fs = require("fs");
const EventEmitter = require("events");
// const emitter = new EventEmitter(); // will use logger

//*Http first way *//

// const http = require('http');
// this server is also event emitter
// const server = http.createServer(); 
// On : to handle an event (request)
// register a listener: the event name is connection as in docs:
// server.on("connection",(socket) => {
//     console.log("new connection.....");
// });
// Listen : every new connection/request will raise an event
// server.listen(80);
// console.log("Listening on port 80...");

//* Http 1st done *//

//* Http second way ( better ) *//
const http = require('http');
const server = http.createServer((req,res)=>{
if (req.url == "/"){
    res.write("Root Page!");
    res.end();
}
if (req.url == "/api/courses"){
    res.write(JSON.stringify([1,2,3]));
    res.end();
}
}); 
server.listen(80);
console.log("Listening on port 80...");
// do bc this is complicated for each route
//, we use Express framework that is built on top
// of the Http module
//* Http done *//


logger = new Logger();

// Register a listener
logger.on('messageLogged',(arg) => { //same as function(arg){}
    console.log('Listener called: ', arg);
});

// console.log(logger);
// logger.log("this is my msg");

var pathObj = path.parse(__filename);
//console.log(pathObj);

var freemem = os.freemem();
var totalmem = os.totalmem();
//console.log('Free memory: ' + freemem);
//console.log(`Total memory:  ${totalmem}`);

//const files = fs.readdirSync('./');
//console.log(files);

// fs.readdir('./',function(err,files){
// if (err) console.log('Error: ', err);
// else console.log('Result: ',files);
// });


//raise an event:
//emitter.emit('messageLogged',{id:1,url:'http://'});

// emitter.emit('logging',{data:'message'})
