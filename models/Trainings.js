const keystone = require('keystone');
const Types = keystone.Field.Types;


// Website model
const Trainings = new keystone.List('Trainings', {
     autokey: { path: 'slug', from: 'title', unique: true }
});


Trainings.add({
     title: { type: String, required: false },
     image: { type: Types.CloudinaryImage },
     description: { type: Types.Html, wysiwyg: true, height: 300 },
     publishedDate: { type: Date, default: Date.now }
});


Trainings.register();
