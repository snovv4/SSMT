import { User } from "../models/user.model.js";

const registerUser = async (req, res) => {
    try {
        const { username, password, email } = req.body;
        // validate
        if (!username || !password || !email) {
            return res.status(400).json({ message: "All fields are required" });
        }
        // exist user
        const existUser = await User.findOne({ email: email.toLowerCase().trim()});
        if (existUser){
            return res.status(400).json({ message: "User already exists"});
        }
        // create user
        const user = await User.create({
            username,
            email: email.toLowerCase(),
            password
        });

        res.status(201).json({ 
            message: "User created",
            user: { _id: user._id, email: user.email, username: user.username }
        });
    } catch (error) {
            res.status(500).json({ message: "Server error", error: error.message})
        }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({
            email: email.toLowerCase().trim(),
        });

        if(!user) return res.status(400).json
        ({ message: "User not found"});
        
        const matchPass = await user.comparePassword(password.trim());
        if(!matchPass) return res.status(400).json({
            message: "Invalid password"
        });
        
        res.status(200).json({
            message: "Login successful",
            user: { 
                _id: user._id, 
                email: user.email, 
                username: user.username 
            }
        });
    } catch (error){
        res.status(500).json({
            message: "Server error",
            error: error.message
        })
    }
}

const logoutUser = async (req, res) => {

}

export { registerUser, loginUser,  logoutUser} 