import { User } from "../models/index.js";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    // validate
    if (!username || !password || !email) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (password.trim().length < 8) {
      return res.status(400).json({
        message: "Password must be 8 or more characters",
      });
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      return res.status(400).json({
        message: "Password must have at least a special character",
      });
    }
    if (!/[A-Z]/.test(password)) {
      return res.status(400).json({
        message: "Password must have at least a uppercase letter",
      });
    }
    // exist user
    const existUser = await User.findOne({ email: email.toLowerCase().trim() });
    if (existUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    // create user
    const user = await User.create({
      username,
      email: email.toLowerCase(),
      password,
    });

    res.status(201).json({
      message: "User created",
      user: { _id: user._id, email: user.email, username: user.username },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      email: email.toLowerCase().trim(),
    });

    if (!user) return res.status(400).json({ message: "User not found" });

    if (!password)
      return res.status(400).json({
        message: "Password is required",
      });

    const matchPass = await user.comparePassword(password.trim());
    if (!matchPass)
      return res.status(400).json({
        message: "Invalid password",
      });

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRECT,
      { expiresIn: "7d" },
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        _id: user._id,
        email: user.email,
        username: user.username,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

const logoutUser = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({
      email: email.toLowerCase().trim(),
    });
    if (!user)
      return res.status(404).json({
        message: "User not found",
      });

    res.status(200).json({
      message: "Logout successful",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

export { registerUser, loginUser, logoutUser };
