const express= require('express');
const router = express.Router();
const {handleGenrateNewURL}= require('../controllers/createUrl')
router.post("/", handleGenrateNewURL);

module.exports = router;


