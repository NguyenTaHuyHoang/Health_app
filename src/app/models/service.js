const mongoose = require("mongoose");
// include lug generator
const slug = require("mongoose-slug-generator");
//include Mongoose delete
const mongoose_delete = require('mongoose-delete');


const Schema = mongoose.Schema;

const Service = new Schema({
    name: { type: String },
    price: { type: Int16Array },
    // this code support generator slug
    slug: { type: String, slug: 'name', maxLength: 300, unique: true },
}, {
    collection: 'Service',
    timestamps: true,
});


// add plugin course
Service.plugin(mongoose_delete, {
    deleteAt: true,
    overrideMethods: 'all'
});
mongoose.plugin(slug);

module.exports = mongoose.model("Service", Service);
