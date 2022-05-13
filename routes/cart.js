import express from "express";
import auth from '../middlewares/auth'

import { addToCart, getCartItmes } from '../handlers/cart'

const router = express.Router();

// router.get('/', auth, getUser)
router.post('/add/:id', auth, addToCart)
router.get('/get', auth, getCartItmes)

export default router