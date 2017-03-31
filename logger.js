var winston = require('winston');

module.exports = new (winston.Logger)({
  transports: [
    new (winston.transports.File)({
      name: 'info-file',
      filename: 'logs/info.log',
      level: 'info'
    }),
    new (winston.transports.File)({
      name: 'error-file',
      filename: 'logs/error.log',
      level: 'error'
    }),
    new (winston.transports.File)({
      name: 'warn-file',
      filename: 'logs/warning.log',
      level: 'warn'
    }),
  ]
});
