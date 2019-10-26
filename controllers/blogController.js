const BlogModel = require("./../database/models/blogModel");

async function index(req, res){
    let blog = await BlogModel.find();
    res.render("blog/index", {blog});
}

async function create(req, res){
    let {title, content} = req.body;
    let blog = await BlogModel.create({title, content})
        .catch(err => res.status(500).send(err));
    res.redirect("/blog");
}

function make(req, res){
    res.render("blog/new");
}

async function show(req, res){
    let { id } = req.params;
    let blog = await BlogModel.findById(id)
        .catch(err => res.status(500).send(err));
    res.render("blog/show", {blog});
}

async function edit(req, res){
    let { id } = req.params;
    let blog = await BlogModel.findById(id)
        .catch(err => res.status(500).send(err));
    res.render("blog/edit", {blog});
}

async function update(req, res){
    let { id } = req.params;
    let blog = await BlogModel.findByIdAndUpdate(id, {title, conent})
        .catch(err => res.status(500).send(err));
    res.redirect(`blog/${id}`, {blog});
}

async function destroy(req, res){
    let { id } = req.params;
    let blog = await BlogModel.findByIdAndDelete(id)
        .catch(err => res.status(500).send(err));
    res.redirect("/blog");
}

module.exports = {
    index,
    create,
    make,
    show,
    edit,
    update,
    destroy
}