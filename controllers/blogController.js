const BlogModel = require("./../database/models/blogModel");

function index(req, res){
    res.render("blog/index");
}

function create(req, res){
    let {title, content} = req.body;
    let blog = BlogModel.create({title, content})
    .catch(err => res.status(500).send(err));
    res.redirect("/blog");
}

module.exports = {
    index,
    create
}