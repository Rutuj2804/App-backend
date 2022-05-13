import express from "express";
import auth from '../middlewares/auth'

import { placeOrder, getOrders, getMyOrders } from '../handlers/order'

const router = express.Router();

// router.get('/', auth, getUser)
router.post('/place', auth, placeOrder)
router.get('/get', auth, getOrders)
router.get('/get/my', auth, getMyOrders)

export default router