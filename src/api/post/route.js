import express from 'express';
const postRoute=express.Router();


postRoute.get('/',getAllPosts);
postRoute.post('/',createPost);
postRoute.get('/:id',getPostById);
postRoute.put('/id',updatePostById);
postRoute.delete('/:id',deletePostById);


export default pageRoute;