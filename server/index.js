const express = require("express");
const app = express();
const mongoose = require("mongoose");

const dotenv = require("dotenv");

dotenv.config();
const userRoutes = require("./routes/userRoutes")

try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected");
} catch (err) {
    console.log(err);
}

app.use(express.json());

const YOUR_DOMAIN = "http://localhost:5000";
app.use("/api/user", userRoutes);
app.listen(5000, () => {
    console.log("Backend Server running ");
});
