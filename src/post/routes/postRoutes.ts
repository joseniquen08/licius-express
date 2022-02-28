import { Router } from "express";
import { createPost, deletePost, editPost, getPosts } from "../controller/postController";

const router: Router = Router()

router.get('/posts', getPosts)
router.post('/posts', createPost)
router.put('/posts/:post_id', editPost)
router.delete('/posts/:post_id', deletePost)
export default router;