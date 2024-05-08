const express= require("express");
const {connectToDB} = require("./database/database.js")
const urlRoute= require("./routes/url")
const getRoute= require("./routes/geturl.js");
const cors = require('cors');
const app = express();
const dotenv= require('dotenv');
dotenv.config();
app.use(cors());
app.use(express.json()); 
app.use("/url", urlRoute);
app.use("/",getRoute);

app.get("/", (req, res) => {
  res.send("Welcome to URL shortener");
});

const PORT = 8000;
app.listen(PORT, async () => {
  await connectToDB();
  console.log("Server is running on port 8000");
});
