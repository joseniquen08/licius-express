import { Router } from "express";
import { createPost, getPosts } from "../controller/postController";

const router: Router = Router()

router.get('/posts', getPosts)
router.post('/posts', createPost)

export default router;