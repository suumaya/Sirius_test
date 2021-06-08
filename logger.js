
const EventEmitter = require("events");
 var url = 'http://mylogger.io/log';

class Logger extends EventEmitter{
    log(message){ 
        //no need to (function) kword inside a class
        //now, it is a (method)
        console.log(message);
        //raise an event:
        this.emit('messageLogged',{id:1,url:'http://'});
    }
}


// module.exports.log = log; // before making a class
// or export a single function without object:
//module.exports = log;
// then use directly : logger = require is the log function
// logger('msg');
// ch name of logger to log ..

// module.exports.url = url;
module.exports = Logger; //class
