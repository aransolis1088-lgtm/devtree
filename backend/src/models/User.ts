/**
 * Modelo de Usuario: define la estructura y validación de datos de usuarios en MongoDB.
 * Incluye campos: handle, nombre, email y contraseña (todos únicos y requeridos).
 */
import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
    handle: string
    name: string,
    email: string,
    password: string
    description: string
}

const userShema = new Schema({
    handle: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        default: ''
    }
})

const User = mongoose.model<IUser>('User', userShema)
export default User