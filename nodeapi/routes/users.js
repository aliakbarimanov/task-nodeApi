const express = require("express");
const router = express.Router();
const UsersModel = require("../models/users");
const getUsers = require("../middleware/getUsers");


// GET ALL USERS
router.get("/", async (req, res) => {
    try {
        const users = await UsersModel.find();
        res.json(users);
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;