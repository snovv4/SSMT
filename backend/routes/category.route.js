import { Router } from "express";
import {
  createCategory,
  getCategories,
  deleteCategory,
} from "../controllers/category.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";
import requireRole from "../middleware/role.middleware.js";

const router = Router();

router.get("/", getCategories);
router.post("/", authMiddleware, requireRole("admin"), createCategory);
router.delete("/:id", authMiddleware, requireRole("admin"), deleteCategory);

export default router;
