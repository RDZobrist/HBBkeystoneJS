const keystone = require('keystone');
const Types = keystone.Field.Types;

const Database = new keystone.List('Database', {
	
	autokey: {path: 'slug', from: 'title', unique: true}
});
Database.add({
	title: {type: String, required: false},
	image: {type: Types.CloudinaryImage},
	description: {type: Types.Html, wysiwyg: true, height: 300},
	publishedDate: {type: Date, default: Date.now}
});

Database.register();