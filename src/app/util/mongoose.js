module.exports = {
    // This function for multi Object
    multiMongooseToObject: function (mongooses) {
        return mongooses.map(mongoose => mongoose.toObject());
    },

    //Thí function for 1 Obj
    mongoosesToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    }
}