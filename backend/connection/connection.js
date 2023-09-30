const mongoose = require("mongoose");

const conn = async (req, res) => {
    try {
        await mongoose.connect("mongodb+srv://akarshitsingh1234:akarshit12@cluster0.1mxm8b1.mongodb.net/").then(() => {
            console.log("Database connected");
        });
    } catch (error) {
        res.status(400).json({
            message:"Not Connected"
        })
    }
};
conn();