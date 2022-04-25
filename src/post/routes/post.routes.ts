import { Router } from "express";
import { createPost, deletePost, editPost, getPostById, getPosts, uploadImage } from '../controllers/post.controllers';
import { createPostSchema, postRequestValidator } from "../middlewares/reqPostValidator.middlewares";
import upload from '../middlewares/uploadImage.middleware';

const router: Router = Router()

router.get('/posts', getPosts);
router.post('/posts', postRequestValidator(createPostSchema), createPost);
router.get('/posts/:post_id', getPostById);
router.put('/posts/:post_id', editPost);
router.delete('/posts/:post_id', deletePost);
router.post('/upload/image', upload, uploadImage);

export default router;