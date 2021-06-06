var url = 'http://mylogger.io/log';

function log(message){
    console.log(message);
}

module.exports.log = log;
// or export a single function without object:
//module.exports = log;
// then use directly : logger = require is the log function
// logger('msg');
// ch name of logger to log ..

module.exports.url = url;
