const express = require("express");
const router = express.Router();
const URL = require("../models/url");
const {handleAnalytics} = require("../controllers/createUrl")

router.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    { shortID: shortId },
    {
      $push: {
        visitHistory: { timestamp: Date.now() },
      },
    }
  );
  if (entry) {
    res.redirect(entry.redirectURL);
  } else {
    res.status(404).send("URL not found");
  }
});

router.get("/analytics/:shortId",handleAnalytics);

module.exports = router;
