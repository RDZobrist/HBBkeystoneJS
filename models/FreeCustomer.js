var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * About Model
 * =============
 */

var FreeCustomer = new keystone.List('FreeCustomer', {
    autokey: { from: 'name', path: 'key', unique: true },
});

FreeCustomer.add({
    name: { type: String, required: true },
    publishedDate: { type: Date, default: Date.now },
    heroImage: { type: Types.CloudinaryImage },
    images: { type: Types.CloudinaryImages },
});

FreeCustomer.register();