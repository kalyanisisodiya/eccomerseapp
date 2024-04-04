import express from "express";
const router = express.Router();

import { requireSignIn } from "./../middlewares/authMiddleware.js";

import {add_to_cart} from "../controllers/cartController.js";
router.post('/add-to-cart',requireSignIn, add_to_cart);

export default router