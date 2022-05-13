import express from "express";
import auth from '../middlewares/auth'

import { registerUser, loginUser, getUser } from '../handlers/authentication'

const router = express.Router();

router.get('/', auth, getUser)
router.post('/register', registerUser)
router.post('/login', loginUser)

export default router