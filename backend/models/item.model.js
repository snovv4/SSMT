import mongoose, { Schema } from 'mongoose';

const itemSchema = new Schema ({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100,
    },
    description: {
        type: String,
        required: true,
        trim: true,
        maxlength: 5000,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    quantity: {
        type: Number,
        required: true,
        min: 0,
    },
    category: {
        type: String,
        enum: ['a', 'b', 'c'],
        required: true,
    }
},{
    timestamps: true,
})

const Item = mongoose.model("Item", itemSchema);

export default Item;