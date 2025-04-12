const express = require("express");
const router = express.Router();
const controller = require("../controllers/reminderController");

router.get("/employer/:id", controller.getByEmployer);

module.exports = router;
