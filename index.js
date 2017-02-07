const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const server = require('./server');
const mongoose = require('mongoose');
const config = require('./config')

mongoose.connect(config.db);
if(process.env.NODE_ENV === "production") ***REMOVED***
  if(cluster.isMaster) ***REMOVED***
    console.log(`Master $***REMOVED***process.pid***REMOVED*** is running`);
    console.log(numCPUs);
    for ( let i = 0; i < numCPUs; i++) ***REMOVED***
      cluster.fork();
    ***REMOVED***
    cluster.on('exit',(worker,code,signal) => ***REMOVED***
      console.log(`worker $***REMOVED***process.pid***REMOVED*** is dead`);
      if(!signal)***REMOVED***
        console.log('forking new worker');
        cluster.fork();
      ***REMOVED***
    ***REMOVED***);
  ***REMOVED*** else ***REMOVED***
    console.log(`worker $***REMOVED***process.pid***REMOVED*** is up`);
    process.on('exit',(code,signal) => ***REMOVED***
      if (signal) ***REMOVED***
        console.log(`worker was killed by signal: $***REMOVED***signal***REMOVED***`);
      ***REMOVED*** else if (code !== 0) ***REMOVED***
        console.log(`worker exited with error code: $***REMOVED***code***REMOVED***`);
      ***REMOVED*** else ***REMOVED***
        console.log('worker success!');
      ***REMOVED***
    ***REMOVED***);
    server.createServer();
  ***REMOVED***
***REMOVED*** else ***REMOVED***
  server.createServer();
***REMOVED***
