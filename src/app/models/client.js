const mongoose = require("mongoose");
// include lug generator
const slug = require("mongoose-slug-generator");
//include Mongoose delete
const mongoose_delete = require('mongoose-delete');


const Schema = mongoose.Schema;

const Client = new Schema({
    name: { type: String },
    email: { type: String },
    image: { type: String },
    address: { type: String },
    password: { type: String },
    dateOfBirth: { type: String },
    CCCD_CMND: { type: String },
    BHYT: { type: String },
    SDT: { type: String },
    rank : { type: String },
    gender : { type: String },
    // this code support generator slug
    slug: { type: String, slug: 'name', maxLength: 300, unique: true },
}, {
    collection: 'Client',
    timestamps: true,
});


// add plugin course
Client.plugin(mongoose_delete, {
    deleteAt: true,
    overrideMethods: 'all'
});
mongoose.plugin(slug);

module.exports = mongoose.model("Client", Client);
