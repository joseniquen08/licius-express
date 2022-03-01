import { Router } from "express";
import { createComment, deleteComment, getCommentById, getComments } from "../controller/comment.controllers";
import { commentRequestValidator, createCommentSchema } from "../middlewares/reqCommentValidator.middlewares";

const router: Router = Router()

router.get('/comments', getComments);
router.post('/comments', commentRequestValidator(createCommentSchema), createComment);
router.get('/comments/:comment_id', getCommentById);
router.put('/comments/:comment_id', createComment);
router.delete('/comments/:comment_id', deleteComment);

export default router;
