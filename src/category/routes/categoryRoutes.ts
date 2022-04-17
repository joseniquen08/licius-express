import { getAllCategories, createCategory, editCategory, deleteCategory } from './../controllers/categoryController';
import {Router} from 'express';

const router: Router = Router();

router.get('/categories', getAllCategories);
router.post('/categories', createCategory);
router.put('/categories/:cat_id', editCategory);
router.delete('/categories/:cat_id', deleteCategory);

export default router;