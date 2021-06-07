
const logger = require('./logger');
const path = require("path");
const os = require("os");
const fs = require("fs");
const EventEmitter = require("events");
const emitter = new EventEmitter();

//console.log(logger);
//logger.log("this is my msg");

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


