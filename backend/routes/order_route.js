import express from "express";
import { verifyToken } from "../middleware/jwt.js";
import { getOrders, intent, confirm } from "../controllers/order_controller.js";

const router = express.Router();

router.get("/", verifyToken, getOrders);
router.post("/create-payment-intent/:id", verifyToken, intent);
router.put("/", verifyToken, confirm);

export default router;