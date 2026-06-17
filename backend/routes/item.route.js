import { Router } from "express";
import {
  createItem,
  getItems,
  getItemById,
  getItemByCategory,
  updateItem,
  deleteItem,
  searchItem,
} from "../controllers/item.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";
import { upload } from "../config/cloudinary.js";

const router = Router();
router.post("/", authMiddleware, upload.array("images", 5), createItem);
router.get("/", getItems);
router.get("/category/:category", getItemByCategory);
router.get("/search, searchItem");
router.get("/:id", getItemById);
router.put("/:id", authMiddleware, upload.array("images", 5), updateItem);
router.delete("/:id", authMiddleware, deleteItem);

export default router;
