var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;


	// set locals(navbar pill link on front end)
	locals.section = 'Try Our Database';

	// load products
	view.query('tryDB', keystone.list('TryDB').model.find());

	// render the view
	view.render('tryDB');
}