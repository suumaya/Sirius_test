
const Logger = require('./logger');
const path = require("path");
const os = require("os");
const fs = require("fs");
const EventEmitter = require("events");
// const emitter = new EventEmitter(); // will use logger
logger = new Logger();

// Register a listener
logger.on('messageLogged',(arg) => { //same as function(arg){}
    console.log('Listener called: ', arg);
});

// console.log(logger);
logger.log("this is my msg");

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
