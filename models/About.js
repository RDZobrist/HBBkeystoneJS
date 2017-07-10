var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * About Model
 * =============
 */

var About = new keystone.List('About', {
	autokey: { from: 'name', path: 'key', unique: true },
});

About.add({
	name: { type: String, required: true },
	publishedDate: { type: Date, default: Date.now },
	heroImage: { type: Types.CloudinaryImage },
	images: { type: Types.CloudinaryImages },
});

About.register();