const mongoose = require("mongoose");
// include lug generator
const slug = require("mongoose-slug-generator");
//include Mongoose delete
const mongoose_delete = require('mongoose-delete');


const Schema = mongoose.Schema;

const Invoice = new Schema({
    client: { type: Object },
    employee: { type: Object },
    service: { type: Array },
    dateOfCreation: { type: Date },
    // this code support generator slug
    slug: { type: String, slug: 'name', maxLength: 300, unique: true },
}, {
    collection: 'Invoice',
    timestamps: true,
});


// add plugin course
Invoice.plugin(mongoose_delete, {
    deleteAt: true,
    overrideMethods: 'all'
});
mongoose.plugin(slug);

module.exports = mongoose.model("Invoice", Invoice);
