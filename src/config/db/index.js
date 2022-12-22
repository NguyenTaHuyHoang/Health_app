const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/Hospital", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //useCreateIndex: true,
    });
    console.log("Successfully connected!");
  } catch (error) {
    console.log("Failed to connect!");
  }
}

module.exports = { connect };
