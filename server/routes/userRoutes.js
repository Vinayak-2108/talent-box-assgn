const express = require("express");
const app = express();
const router = express.Router();
const jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

const User = require("../models/User");
const Course = require("../models/Course");

router.post("/signup", async (req, res) => {
    try {
        const { user_name, user_email, user_contact, user_password } = req.body;

        // put all info
        if (!user_name || !user_email || !user_password) {
            res.status(400);
            throw new err("Please add all fields");
        }

        // Check if the user already exists
        let userexist = await User.findOne({ user_email });
        if (userexist) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hashing
        const salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(user_password, salt);

        const user = new User({
            user_name,
            user_email,
            user_contact,
            user_password: hashedpassword,
        });

        await user.save();

        res.status(200).json({ message: "User created successfully" });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

router.post("/login", async (req, res) => {
    try {
        const { user_email, user_password } = req.body;

        const user = await User.findOne({ user_email: user_email });

        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        // Compare the passwords
        const isMatch = await bcrypt.compare(user_password, user.user_password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Sign the JWT
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

        return res.json({ message: "success", token: token, tag: true });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

// Authentication route
router.post("/auth", async (req, res) => {
    const token = req.body.token;

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const userId = decoded.id;

        res.json({ message: `Authenticated user: ${userId}`, tag: true });
    } catch (err) {
        res.status(401).json({ error: "You are not authenticated" });
    }
});

router.post("/course", async (req, res) => {
    const { course_title, course_duration } = req.body;

    const course = new Course({
        course_title,
        course_duration,
    });
    const result = await course.save();

    if (result) {
        return res.status(200).json({ message: "Course saved successfully" });
    } else {
        return res.status(400).json({ message: "Course not saved" });
    }
});

router.post("/allcourses", async (req, res) => {
    try {
        const forms = await Course.find();
        res.json(forms);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
