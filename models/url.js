import mongoose, { Schema, model } from "mongoose";
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
        timeStanp: {
          type: Number,
        },
      },
    ],
  },
  { timeStamp: true }
);

const URL = model("url", urlSchema);
module.export = URL;
