/**
 * This file contains the common middleware used by your routes.
 *
 * Extend or replace these functions as your application requires.
 *
 * This structure is not enforced, and just a starting point. If
 * you have more middleware you may want to group it as separate
 * modules in your project's /lib directory.
 */
var _ = require('lodash');


/**
	Initialises the standard view locals

	The included layout depends on the navLinks array to generate
	the navigation in the header, you may wish to change this array
	or replace it with your own templates / logic.
*/

exports.initLocals = function(req, res, next) {

        res.locals.navLinks = [

            { label: 'About', key: 'about', href: '/about' },
            { label: 'Blog', key: 'blog', href: '/blog' },
            { label: 'Gallery', key: 'gallery', href: '/gallery' },
            { label: 'Website', key: 'website', href: '/websites' },
            { label: 'Try Our Database', key: 'tryDB', href: '/tryDB' },
            { label: 'Free Trial', key: 'freeTrial', href: '/freeTrial' },
            { label: 'Trainings', key: 'trainings', href: '/trainings' },
            { label: 'Database', key: 'database', href: '/databases' },
            { label: 'Forms', key: 'forms', href: '/forms' },
            { label: 'Community', key: 'community', href: '/community' },
            { label: 'Contact', key: 'contact', href: '/contact' },
            { label: 'Request Free Demo', key: 'request-free-demo', href: '/request-free-demo' },
            { label: 'Become an Industry Leader', key: 'industry-leader', href: '/industry-leader' },
            { label: 'Start My Free Trial', key: 'start-my-free-trial', href: '/start-my-free-trial' },
            { label: 'Become Website Customer', key: 'become-website-customer', href: '/become-website-customer' },
            { label: '5 Day Pro Member Trial', key: 'pro-member-trial', href: '/pro-member-trial' },
            { label: 'Become Free Member', key: 'become-free-member', href: '/become-free-member' },
             { label: 'Become a Mastermind Leader', key: 'mastermind-leader', href: '/mastermind-leader' },



            // { label: 'Contact', key: 'contact', href: '/contact' },


        ];
        res.locals.user = req.user;
        // fafaImage(res.locals.navLinks[0].label);
        next();
        };


        /**
        	Fetches and clears the flashMessages before a view is rendered
        */
        exports.flashMessages = function(req, res, next) {
            var flashMessages = {
                info: req.flash('info'),
                success: req.flash('success'),
                warning: req.flash('warning'),
                error: req.flash('error'),
            };
            res.locals.messages = _.some(flashMessages, function(msgs) { return msgs.length; }) ? flashMessages : false;
            next();
        };


        /**
        	Prevents people from accessing protected pages when they're not signed in
         */
        exports.requireUser = function(req, res, next) {
            if (!req.user) {
                req.flash('error', 'Please sign in to access this page.');
                res.redirect('/keystone/signin');
            } else {
                next();
            }
        };