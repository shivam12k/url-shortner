import { nanoid } from "nanoid";
import URL from "../models/url";

 export async function handleGenrateNewURL(req, res) {
  console.log("error")
  try {
    const body = req.body;
    if (!body.url) {
      return res.status(400).json({ error: "URL is required" });
    }
    const shortID = nanoid(8);
    await URL.create({
      shortID: shortID,
      redirectURL: body.url,
      visitHistory: [],
    });
    return res.json({ id: shortID });
  } catch (error) {
 
    return res.status(500).json({ error: error.message });
  }
}

