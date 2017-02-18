const env = process.env.NODE_ENV || 'test';
/*LOCAL FILES*/
const config = require('./config/config')[env];
const User = require('./models').User;
/*CONSTANTS*/
const test_url = 'http://localhost:'+config.appPort;
const user_credential = '_auth_test_';

require('./app')(config.appPort);

//simple one to start

require('./tests/general.js')(test_url);
require('./tests/user.js')(test_url,user_credential);
