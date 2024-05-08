const mongoose = require("mongoose");

async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, { dbName: 'urlShortener' });
    console.log("Connected to database");
  } catch (error) {
    console.log(error.message);
  }
}
module.exports={connectToDB}