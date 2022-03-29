import { createOrder, notificationDeOrder } from './../controller/mercadoPagoController';
import { Router } from "express";

const router: Router = Router()

router.post('/checkout', createOrder)
router.post('/notification', notificationDeOrder)

export default router;