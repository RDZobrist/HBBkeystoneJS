var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;


	// set locals(navbar pill link on front end)
	locals.section = 'start-my-free-trial';

	// load products
	view.query('start-my-free-trial', keystone.list('FreeTrial30').model.find());

	// render the view
	view.render('start-my-free-trial');
}