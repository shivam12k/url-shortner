import express from "express";
const router = express.Router();
import { handleGenrateNewURL } from "../createUrl.js";
console.log(handleUrl);
router.post("/", handleGenrateNewURL);

module.exports = router;
