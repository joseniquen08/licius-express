import { Router } from "express";
import { createPost, deletePost, editPost, getAllPosts, getPostById, getPosts } from "../controllers/post.controllers";
import { createPostSchema, postRequestValidator } from "../middlewares/reqPostValidator.middlewares";

const router: Router = Router()

router.get('/getallposts', getAllPosts);
router.get('/posts', getPosts);
router.post('/posts', postRequestValidator(createPostSchema), createPost);
router.get('/posts/:post_id', getPostById);
router.put('/posts/:post_id', editPost);
router.delete('/posts/:post_id', deletePost);

export default router;