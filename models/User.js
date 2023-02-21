import mongoose from "mongoose";
const userSchema = mongoose.Schema(
    {
        name: {type: String, required: true, minlength: 3, maxlength: 50},
        email: {type: String, required: true, minlength: 3, maxlength: 100},
        password: {type: String, required: true, minlength: 8, maxlength: 100},
        createdAt: {type: Date, default: Date.now},
    }
)
export default userSchema;