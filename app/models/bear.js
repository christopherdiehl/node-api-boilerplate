var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BearSchema = new Schema(***REMOVED***
  name: String
***REMOVED***);

module.exports = mongoose.model('Bear', BearSchema);
