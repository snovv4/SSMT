import { Router } from "express";
import {
  createItem,
  getItems,
  getItemById,
  deleteItem,
} from "../controllers/item.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";
import { upload } from "../config/cloudinary.js";

const router = Router();
router.post("/", authMiddleware, upload.array("images", 5), createItem);
router.get("/:id", getItemById);
router.get("/", getItems);
router.delete("/:id", authMiddleware, deleteItem);

export default router;
