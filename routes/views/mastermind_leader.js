var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;


	// set locals(navbar pill link on front end)
	locals.section = 'mastermind-leader';

	// load products
	view.query('mastermind-leader', keystone.list('Mastermind').model.find());

	// render the view
	view.render('mastermind-leader');
}