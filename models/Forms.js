var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * About Model
 * =============
 */

var Forms = new keystone.List('Forms', {
    autokey: { from: 'name', path: 'key', unique: true },
});

Forms.add({
    name: { type: String, required: true },
    publishedDate: { type: Date, default: Date.now },
    heroImage: { type: Types.CloudinaryImage },
    images: { type: Types.CloudinaryImages },
});

Forms.register();