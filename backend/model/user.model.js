import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensure email is unique
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    profile: {
        type: String,
        default: "",
    },
    membership: {
        type: String,
        enum: ["Permanent Donator", "One time Donator"],
        default: "Permanent Donator",
    }
}, { timestamps: true });

const users = mongoose.model("User", userSchema);
export default users;
