import { Router } from "express";
import { createComment, deleteComment, getComments } from "../controller/commentController";

const router: Router = Router()

router.get('/comments', getComments)
router.post('/comments', createComment)
router.put('/comments/:comment_id', createComment)
router.delete('/comments/:comment_id', deleteComment)

export default router