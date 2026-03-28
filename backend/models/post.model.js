import mongoose, { Schema } from "mongoose";

const postSchema = new Schema({
    title:{
        type: String,
        required: true,
        trim: true,
        maxlength: 100,

    },
    content: {
        type: String,
        required: true,
        trim: true,
        maxlength: 5000,
    },
    age: {
        type: Number,
        required: true,
        min: 0,
        max: 44
    }

    
},{
    timestamps: true,
});

export const Post = mongoose.model("Post", postSchema)