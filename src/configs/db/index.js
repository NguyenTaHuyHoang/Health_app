const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/Hospital", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //useCreateIndex: true,mongodb://localhost:27017/
    });
    console.log("Successfully connected!");
  } catch (error) {
    console.log(error);
  }
}

module.exports = { connect };
