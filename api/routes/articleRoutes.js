module.exports = function(app) {
	var article = require('../controllers/articleController');

	// article Routes
	app.route('/api/v1/article')
		.get(article.list_articles)
		.post(article.create_a_article);

	app.route('/api/v1/article/:id')
		.get(article.read_a_article)
		.put(article.update_a_article)
		.delete(article.delete_a_article);
};
