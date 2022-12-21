const mongoose = require("mongoose");
// include lug generator
const slug = require("mongoose-slug-generator");
//include Mongoose delete
const mongoose_delete = require('mongoose-delete');
const { ObjectId } = require("mongodb");


const Schema = mongoose.Schema;

const Patient = new Schema({
    id_patient: { type: ObjectId },
    dateOfCreation: { type: String },
    medicalHistory: { type: Array },
    // this code support generator slug
    slug: { type: String, slug: 'name', maxLength: 300, unique: true },
}, {
    collection: 'MedicalRecord',
    timestamps: true,
});


// add plugin course
Patient.plugin(mongoose_delete, {
    deleteAt: true,
    overrideMethods: 'all'
});
mongoose.plugin(slug);

module.exports = mongoose.model("Patient", Patient);
