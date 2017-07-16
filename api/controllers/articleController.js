var mongoose = require('mongoose'),
  Article = mongoose.model('Articles');

exports.list_articles = function(req, res) {
  Article.find({}, function(err, article) {
    if (err)
      res.send(err);
    res.json(article);
  }).limit(10);
};

exports.create_a_article = function(req, res) {
  var new_article = new Article(req.body);
  new_article.save(function(err, article) {
    if (err)
      res.send(err);
    res.json(article);
  });
};

exports.read_a_article = function(req, res) {
  Article.findById(req.params.id, function(err, article) {
    if (err)
      res.send(err);
    res.json(article);
  });
};

exports.update_a_article = function(req, res) {
  Article.findOneAndUpdate({_id:req.params.id}, req.body, {new: true}, function(err, article) {
    if (err)
      res.send(err);
    res.json(article);
  });
};

exports.delete_a_article = function(req, res) {

  Article.remove({
    _id: req.params.id
  }, function(err, article) {
    if (err)
      res.send(err);
    res.json({ message: 'Deleted' });
  });
};
