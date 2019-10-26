const express = require("express");
const router = express.Router();
const BlogController = require("./../controllers/blogController");

router.get("/blog", BlogController.index);
router.post("/blog", BlogController.create);

module.exports = router;