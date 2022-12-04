import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId, // default
    user_id: { 
        type: String, //변경 가능
        required: true
    },
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    content: { 
        type: String,
        required: true
    },
    created_at: { 
        type: Date,
        default:Date.now
    }
});

export default mongoose.model('Blog', BlogSchema); 