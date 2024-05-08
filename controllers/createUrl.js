const shortid = require("shortid");
const URL = require("../models/url");
async function handleGenrateNewURL(req, res) {
  try {
    const body = req.body;
    console.log(body);
    if (!body.url) {
      return res.status(400).json({ error: "URL is required" });
    }
    console.log("create url");

    const shortID = shortid(8);
    await URL.create({
      shortID: shortID,
      redirectURL: body.url,
      visitHistory: [],
    });
    console.log("url is saved");
    return res.json({ id: shortID });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
const handleAnalytics = async (req, res) => {
  const shortId = req.params.shortId;
  const response = await URL.findOne({ shortID: shortId });
  return res.json({
    totalClicks: response.visitHistory.length,
    analytics: response.visitHistory,
  });
};

module.exports = { handleGenrateNewURL, handleAnalytics };
