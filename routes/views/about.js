var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;


	// set locals(navbar pill link on front end)
	locals.section = 'about';

	// load products
	view.query('about', keystone.list('About').model.find());

	// render the view
	view.render('about');
}