var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * About Model
 * =============
 */

var Mastermind = new keystone.List('Mastermind', {
    autokey: { from: 'name', path: 'key', unique: true },
});

Mastermind.add({
    name: { type: String, required: true },
    publishedDate: { type: Date, default: Date.now },
    heroImage: { type: Types.CloudinaryImage },
    images: { type: Types.CloudinaryImages },
});

Mastermind.register();