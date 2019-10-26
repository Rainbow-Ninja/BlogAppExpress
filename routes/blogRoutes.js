const express = require("express");
const router = express.Router();
const BlogController = require("./../controllers/blogController");

router.get("/blog", BlogController.index);
router.post("/blog", BlogController.create);
router.get("/blog/new", BlogController.make);
router.get("/blog/:id", BlogController.show);
router.get("/blog/edit/:id", BlogController.edit);
router.put("/blog/:id", BlogController.update);
router.delete("/blog/:id", BlogController.destroy);

module.exports = router;