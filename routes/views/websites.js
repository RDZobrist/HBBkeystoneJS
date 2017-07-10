var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;


	// set locals(navbar pill link on front end)
	locals.section = 'website';

	// load products
	view.query('websites', keystone.list('Website').model.find());

	// render the view
	view.render('websites');
}