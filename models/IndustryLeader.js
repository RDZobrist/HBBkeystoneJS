var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * About Model
 * =============
 */

var IndustryLeader = new keystone.List('IndustryLeader', {
    autokey: { from: 'name', path: 'key', unique: true },
});

IndustryLeader.add({
    name: { type: String, required: true },
    publishedDate: { type: Date, default: Date.now },
    heroImage: { type: Types.CloudinaryImage },
    images: { type: Types.CloudinaryImages },
});

IndustryLeader.register();