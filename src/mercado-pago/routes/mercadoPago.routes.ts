import { Router } from "express";
import { createPreferencePost, savePaymentPost } from '../controllers/mercadoPago.controllers';

const router: Router = Router()

router.post('/checkout', createPreferencePost);
router.post('/create_payment', savePaymentPost);

export default router;