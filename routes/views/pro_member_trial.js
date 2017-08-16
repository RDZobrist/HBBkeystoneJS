var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;


	// set locals(navbar pill link on front end)
	locals.section = 'pro-member-trial';

	// load products
	view.query('pro-member-trial', keystone.list('ProMember').model.find());

	// render the view
	view.render('pro-member-trial');
}