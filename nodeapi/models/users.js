const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        createdDate: {
            type: Date,
            required: true,
            default: Date.now
        }
    },
    {
        collection: "Users"
    }
);

module.exports = mongoose.model("UsersModel", userSchema);