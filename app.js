
const logger = require('./logger');
const path = require("path");
const os = require("os");

//console.log(logger);
//logger.log("this is my msg");

var pathObj = path.parse(__filename);
//console.log(pathObj);

var freemem = os.freemem();
var totalmem = os.totalmem();
//console.log('Free memory: ' + freemem);
//console.log(`Total memory:  ${totalmem}`);

