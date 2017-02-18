const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
<<<<<<< HEAD
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
    /*Setup app*/
    require('./app')(config.port);
  ***REMOVED***
***REMOVED*** else ***REMOVED***
  require('./app')(config.port);
***REMOVED***
=======
const config = require('./config')

if(process.env.NODE_ENV === "production") {
  if(cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);
    console.log(numCPUs);
    for ( let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }
    cluster.on('exit',(worker,code,signal) => {
      console.log(`worker ${process.pid} is dead`);
      if(!signal){
        console.log('forking new worker');
        cluster.fork();
      }
    });
  } else {
    console.log(`worker ${process.pid} is up`);
    process.on('exit',(code,signal) => {
      if (signal) {
        console.log(`worker was killed by signal: ${signal}`);
      } else if (code !== 0) {
        console.log(`worker exited with error code: ${code}`);
      } else {
        console.log('worker success!');
      }
    });
    /*Setup app*/
    require('./app')(config.port);
  }
} else {
  require('./app')(config.port);
}
>>>>>>> 669226f89a01c8b0e3009379be583dc164a860a2
