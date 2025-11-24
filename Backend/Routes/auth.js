const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register
router.post("/register", async (req, res) => {
    console.log("BODY RECEIVED:", req.body);
    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ msg: "User already exists" });

        user = new User({ email, password });
        await user.save();

        res.status(201).json({ msg: "User registered successfully" });
      } catch (err) {
          console.log(err);
        res.status(500).json({ msg: "Server error" });
    }
});

// Login
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ msg: "Invalid credentials" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

        const token = jwt.sign({ id: user._id }, "YOUR_SECRET_KEY", { expiresIn: "1h" });
        res.json({ token });
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Server error" });
    }
});

module.exports = router;