import { Router } from "express";
import { createPreferencePost } from '../controllers/mercadoPago.controllers';

const router: Router = Router()

router.post('/checkout', createPreferencePost);

export default router;