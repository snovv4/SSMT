import { Post } from "../models/index.js";

const createPost = async (req, res) => {
  try {
    const { title, content, age } = req.body;
    if (!title || !content || !age) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const post = await Post.create({
      title,
      content,
      age,
      author: req.user.userId,
    });
    res.status(200).json({
      message: "Post created",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({
      createdAt: -1,
    });
    res.status(200).json({
      posts,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};
const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({
        message: "Post not found",
      });
    }
    res.status(200).json({
      post,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

const updatePost = async (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({
        message: "No data provided for update",
      });
    }
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: "after",
      runValidators: true,
    });
    if (!post) {
      return res.status(404).json({
        message: "Post not found",
      });
    }
    res.status(200).json({
      message: "Post updated",
      post,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};
const deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).json({
        message: "Post not found",
      });
    }
    res.status(200).json({
      message: "Post deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

export { createPost, getPosts, getPostById, updatePost, deletePost };
