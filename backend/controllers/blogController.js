const asyncHandler = require("express-async-handler");
const Blogs = require('../models/blogmodels')

const Getblogs = asyncHandler(async (req, res) =>{
    const allBlogs = await Blogs.find()
    res.status(200).json(allBlogs)
 })

 const Addblogs = asyncHandler(async (req, res) =>{
   if(!req.body.text){
      res.status(400)
      throw new Error("Please provide text")
   }
   const newBlogs = new Blogs(req.body);
   await newBlogs.save();
   res.status(201).json(newBlogs);
 })

 const Updateblogs = asyncHandler(async(req, res) =>{
    const blogId = Blogs.findById(req.params.id);
    if(!blogId){
      res.status(404)
      throw new Error("blog not Found")
    }
    const updateBlogs = await Blogs.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updateBlogs)
 })

 const Deleteblogs = asyncHandler(async(req, res) =>{
   const blogId = Blogs.findById(req.params.id);
    if(!blogId){
      res.status(404)
      throw new Error("blog not Found")
    }
    const deletedUser = await Blogs.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted successfully" });
 })

 module.exports = {
    Getblogs,
    Addblogs,
    Updateblogs,
    Deleteblogs
 }