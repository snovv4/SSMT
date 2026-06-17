import { Item } from "../models/index.js";
import { v2 as cloudinary } from "cloudinary";

const uploadToCloudinary = (buffer) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({ folder: "ssmt/items" }, (error, result) => {
        if (error) reject(error);
        else resolve(result);
      })
      .end(buffer);
  });
};

const createItem = async (req, res) => {
  try {
    const { name, description, price, stock, category } = req.body;

    if (!name) return res.status(400).json({ message: "Name is required" });
    if (!description)
      return res.status(400).json({ message: "Description is required" });
    if (!price) return res.status(400).json({ message: "Price is required" });
    if (!stock) return res.status(400).json({ message: "Stock is required" });
    if (!category)
      return res.status(400).json({ message: "Category is required" });

    const existingItem = await Item.findOne({ name: name.trim() });
    if (existingItem) {
      return res.status(400).json({ message: "Item name already exists" });
    }

    const images = req.files?.length
      ? await Promise.all(
          req.files.map(async (file) => {
            const result = await uploadToCloudinary(file.buffer);
            return { url: result.secure_url, alt: name };
          }),
        )
      : [];

    const item = await Item.create({
      name,
      description,
      price,
      stock,
      category,
      images,
      seller: req.user.userId,
    });

    res.status(201).json({ message: "Item created", item });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const getItems = async (req, res) => {
  try {
    const items = await Item.find().sort({
      createdAt: -1,
    });
    res.status(200).json({
      items,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

const getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({
        message: "Item not found",
      });
    }
    res.status(200).json({
      item,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

const getItemByCategory = async (req, res) => {
  try {
    const item = await Item.find({ category: req.params.category }).sort({
      createdAt: -1,
    });
    if (!item) {
      return res.status(404).json({
        message: "Item not found",
      });
    }
    res.status(200).json({
      item,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

const updateItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!item) {
      return res.status(404).json({
        message: "Item not found",
      });
    }
    res.status(200).json({
      message: "Item updated",
      item,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

const deleteItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);
    if (!item) {
      return res.status(404).json({
        message: "Item not found",
      });
    }
    res.status(200).json({
      message: "Item deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

const searchItem = async (req, res) => {
  try {
    const { q } = req.query;
    if (!q) {
      return res.status(400).json({
        message: "Search query is required",
      });
    }
    const items = await Item.find({
      name: { $regex: q, $option: "i" },
    }).sort({ createdAt: -1 });
    res.status(200).json({ items });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

export {
  createItem,
  getItems,
  getItemById,
  getItemByCategory,
  updateItem,
  deleteItem,
  searchItem,
};
