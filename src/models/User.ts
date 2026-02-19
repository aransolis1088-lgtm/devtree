import mongoose, { Schema } from "mongoose";

const userShema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    passoword: {
        type: String,
        required: true,
        trim: true
    }
})

const User = mongoose.model('User', userShema)
export default User