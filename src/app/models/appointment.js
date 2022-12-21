const mongoose = require("mongoose");
// include lug generator
const slug = require("mongoose-slug-generator");
//include Mongoose delete
const mongoose_delete = require('mongoose-delete');


const Schema = mongoose.Schema;

const Appointment = new Schema({
    client: { type: Object },
    employee: { type: Object },
    dateOfCreation: { type: String },
    note: { type: String },
    // this code support generator slug
    slug: { type: String, slug: 'name', maxLength: 300, unique: true },
}, {
    collection: 'Appointment',
    timestamps: true,
});


// add plugin course
Appointment.plugin(mongoose_delete, {
    deleteAt: true,
    overrideMethods: 'all'
});
mongoose.plugin(slug);

module.exports = mongoose.model("Appointment", Appointment);
