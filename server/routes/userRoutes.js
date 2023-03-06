const express = require("express");
const app = express();
const router = express.Router();
const jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

const User = require("../models/User");

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

  module.exports = router;