var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * About Model
 * =============
 */

var ProMember = new keystone.List('ProMember', {
    autokey: { from: 'name', path: 'key', unique: true },
});

ProMember.add({
    name: { type: String, required: true },
    publishedDate: { type: Date, default: Date.now },
    heroImage: { type: Types.CloudinaryImage },
    images: { type: Types.CloudinaryImages },
});

ProMember.register();