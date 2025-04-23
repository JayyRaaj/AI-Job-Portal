const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");

router.get("/blogs", blogController.getAllBlogs);
router.post("/blogs", blogController.addBlog);

module.exports = router;
