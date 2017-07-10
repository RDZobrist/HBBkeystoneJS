var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;


	// set locals(navbar pill link on front end)
	locals.section = 'forms';

	// load products
	view.query('forms', keystone.list('Forms').model.find());

	// render the view
	view.render('forms');
}