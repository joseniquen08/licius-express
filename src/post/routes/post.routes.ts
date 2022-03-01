import { Router } from "express";
import { createPost, deletePost, editPost, getPostById, getPosts } from "../controllers/post.controllers";

const router: Router = Router()

router.get('/posts', getPosts);
router.post('/posts', createPost);
router.get('/posts/:post_id', getPostById);
router.put('/posts/:post_id', editPost);
router.delete('/posts/:post_id', deletePost);

export default router;