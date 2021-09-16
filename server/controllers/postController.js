import Post from '../models/postModel.js'
export const getPosts=(req,res)=>{
    Post.find()
    .then((result)=>{
        
    })
}

export const createPost=(req,res)=>{
    res.send("create post")
}