import express from "express";
import auth from '../middlewares/auth'

import { createCategory, getCategory } from '../handlers/category'

const router = express.Router();

// router.get('/', auth, getUser)
router.post('/create', auth,createCategory)
router.get('/get/:id', auth, getCategory)

export default router