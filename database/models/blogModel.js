const mongoose = require("mongoose");
const BlogSchema = require("./../schemas/blogSchema");

const BlogModel = mongoose.model("blog", BlogSchema);

module.exports = BlogModel;