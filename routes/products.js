import express from "express";
import auth from '../middlewares/auth'
import upload from '../middlewares/upload'

import { createProduct, getProduct, getProductCategoryWise, getFewProductCategoryWise, getAllProducts } from '../handlers/products'

const router = express.Router();

router.post('/create', [auth, upload.single('image')], createProduct)
router.get('/get/:id', auth, getProduct)
router.get('/getall', auth, getAllProducts)
router.get('/category/:id', auth, getProductCategoryWise)
router.get('/few/:id', auth, getFewProductCategoryWise)

export default router