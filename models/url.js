const {Schema, model} =require("mongoose")
const urlSchema = new Schema(
  {
    shortID: {
      type: String,
      required: true,
      unique: true,
    },
    redirectURL: {
      type: String,
      required: true,
    },
    visitHistory: [
      {
        timestamp: {
          type: Number,
        },
      },
    ],
  },
  { timeStamp: true }
);

const URL = model("url", urlSchema);
module.exports = URL;
