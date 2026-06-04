import { Router } from "express";
import { createItem } from "../controllers/item.controller.js";
import { getItems } from "../controllers/item.controller.js";
import { deleteItem } from "../controllers/item.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = Router();
router.post("/create", authMiddleware, createItem);
router.get("/getItems", getItems);
router.delete("/delete/:id", authMiddleware, deleteItem);

export default router;
