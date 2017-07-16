var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  content: {
    type: String
  },  
  coment: {
    type: String
  },
  short: {
    type: String
  },
  title: {
    type: String
  }
});


module.exports = mongoose.model('Articles', ArticleSchema);