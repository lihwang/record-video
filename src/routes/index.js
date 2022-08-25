var express = require("express");
var router = express.Router();

const screenshotControllers = require("../controller/index");

module.exports = router.post(
  "/api/puppeteer/v1/screenshot",
  screenshotControllers.api.screenshot
);
