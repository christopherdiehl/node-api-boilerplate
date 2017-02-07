const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const server = require('./server');
const mongoose = require('mongoose');
const config = require('./config')

mongoose.connect(config.db);
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
    server.createServer();
  }
} else {
  server.createServer();
}
