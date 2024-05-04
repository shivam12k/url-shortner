import mongoose from "mongoose";
async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, { dbName: 'urlShortner' });
    console.log("connected to database");
  } catch (error) {
    console.log(error.message);
  }
}
export { connectToDB };
