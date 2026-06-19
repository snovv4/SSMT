import { Router } from "express";
import {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
} from "../controllers/post.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = Router();
router.get("/", getPosts);
router.get("/:id", getPostById);
router.post("/", authMiddleware, createPost);
router.patch("/:id", authMiddleware, updatePost);
router.delete("/:id", authMiddleware, deletePost);
export default router;
