const keystone = require('keystone');
const Types = keystone.Field.Types;


// Website model
const Website = new keystone.List('Website', {
     autokey: { path: 'slug', from: 'title', unique: true }
});


Website.add({
     title: { type: String, required: false },
     image: { type: Types.CloudinaryImage },
     description: { type: Types.Html, wysiwyg: true, height: 300 },
     publishedDate: { type: Date, default: Date.now }
});

Website.register();
