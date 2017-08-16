const keystone = require('keystone');
const Types = keystone.Field.Types;

const FreeTrial30 = new keystone.List('FreeTrial30', {

    autokey: { path: 'slug', from: 'title', unique: true },
});
FreeTrial30.add({
    title: { type: String, required: false },
    image: { type: Types.CloudinaryImage },
    description: { type: Types.Html, wysiwyg: true, height: 300 },
    publishedDate: { type: Date, default: Date.now },
});

FreeTrial30.register();