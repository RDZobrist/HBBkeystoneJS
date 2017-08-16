var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;


	// set locals(navbar pill link on front end)
	locals.section = 'industry-leader';

	// load products
	view.query('industry-leader', keystone.list('IndustryLeader').model.find());

	// render the view
	view.render('industry-leader');
}