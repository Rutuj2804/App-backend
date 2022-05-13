import express from "express";
import auth from '../middlewares/auth'
import upload from '../middlewares/upload'

import { createProduct, getProduct } from '../handlers/products'

const router = express.Router();

router.post('/create', [auth, upload.single('image')], createProduct)
router.get('/get/:id', auth, getProduct)

export default router