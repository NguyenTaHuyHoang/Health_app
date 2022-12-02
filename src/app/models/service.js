const mongoose = require("mongoose");
// include lug generator
const slug = require("mongoose-slug-generator");
//include Mongoose delete
const mongoose_delete = require('mongoose-delete');
const { Int32 } = require("mongodb");


const Schema = mongoose.Schema;

const Service = new Schema({
    serviceName: { type: String },
    price: {},
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
