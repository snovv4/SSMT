import { Item } from '../models/index.js';

const createItem = async (req, res) => {
    try {
        const { name, description, price, quantity, category } = req.body;
        if (!name) {
            return res.status(400).json({ message: "Name is required"});
        }
        if (!description) {
            return res.status(400).json({ message: "Description is required"});
        }
        if (!price) {
            return res.status(400).json({ message: "Price is required"});
        }
        if (!quantity) {
            return res.status(400).json({ message: "Quantity is required"});
        }
        if (!category) {
            return res.status(400).json({ message: "Category is required"});
        }

        const item = await Item.create({
            name,
            description,
            price,
            quantity,
            category
        });
        res.status(200).json({
            message: "Item created",
            item
        })

    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message
        })
    }
}

const getItems = async (req, res) => {
    try{
        const items = await Item.find().sort({
            createdAt: -1
        });
        res.status(200).json({
            items
        })
    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message
        })
    }
}

export { createItem, getItems }