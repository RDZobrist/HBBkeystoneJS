const keystone = require('keystone');
const Types = keystone.Field.Types;

const FreeTrial = new keystone.List('FreeTrial', {
	
	autokey: {path: 'slug', from: 'title', unique: true}
});
FreeTrial.add({
	title: {type: String, required: false},
	image: {type: Types.CloudinaryImage},
	description: {type: Types.Html, wysiwyg: true, height: 300},
	publishedDate: {type: Date, default: Date.now}
});

FreeTrial.register();