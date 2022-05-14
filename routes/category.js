import express from "express";
import auth from '../middlewares/auth'

import { createCategory, getCategory, getCategories } from '../handlers/category'

const router = express.Router();

// router.get('/', auth, getUser)
router.post('/create', auth,createCategory)
router.get('/get/:id', auth, getCategory)
router.get('/get', auth, getCategories)

export default router