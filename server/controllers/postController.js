import Post from '../models/postModel.js'
export const getPosts=(req,res)=>{
    Post.find()
    .then((result)=>{
        res.send(result)
    })
    .catch(err=>console.log(err))
}

export const createPost=(req,res)=>{
    res.send("create post")
}