var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Communtiy Model
 * =============
 */

var Community = new keystone.List('Community', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Community.add({
	name: { type: String, required: true },
	publishedDate: { type: Date, default: Date.now },
	heroImage: { type: Types.CloudinaryImage },
	images: { type: Types.CloudinaryImages },
});

Community.register();