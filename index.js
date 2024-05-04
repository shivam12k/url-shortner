import express from "express";
import { connectToDB } from './database/database.js';
import urlRoute from './routes/url.js';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
app.get("/", (req, res) => {
  res.send("Welcome to URL shortener");
});

const PORT = 8000;
app.listen(PORT, async () => {
  await connectToDB();
  console.log("Server is running on port 8000");
});
