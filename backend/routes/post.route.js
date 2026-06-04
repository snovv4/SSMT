import { Router } from "express";
import {
  createPost,
  getPosts,
  updatePost,
  deletePost,
} from "../controllers/post.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = Router();
router.post("/create", authMiddleware, createPost);
router.get("/getPosts", getPosts);
router.patch("/update/:id", authMiddleware, updatePost);
router.delete("/delete/:id", authMiddleware, deletePost);
export default router;
