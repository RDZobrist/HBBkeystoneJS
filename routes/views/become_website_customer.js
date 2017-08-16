var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;


	// set locals(navbar pill link on front end)
	locals.section = 'become-website-customer';

	// load products
	view.query('become-website-customer', keystone.list('Demo').model.find());

	// render the view
	view.render('become-website-customer');
}