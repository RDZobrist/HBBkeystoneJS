const keystone = require('keystone');
const Types = keystone.Field.Types;

const TryDB =  new keystone.List('TryDB', {
	
	autokey: {path: 'slug', from: 'title', unique: true}
});
TryDB.add({
	title: {type: String, required: false},
	image: {type: Types.CloudinaryImage},
	description: {type: Types.Html, wysiwyg: true, height: 300},
	publishedDate: {type: Date, default: Date.now}
});

TryDB.register();