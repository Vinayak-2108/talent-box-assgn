const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors=require("cors");

const dotenv = require("dotenv");

dotenv.config();
const userRoutes = require("./routes/userRoutes")

try {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("DB Connected");
    })
    
} catch (err) {
    console.log(err);
}

app.use(cors());
app.use(express.json());

const YOUR_DOMAIN = "http://localhost:5000";

app.use("/api/user", userRoutes);
app.use(express.static('client/build'));

app.get('*', (req, res) =>
  res.sendFile(
    path.resolve(__dirname, 'client','build', 'index.html')
  )
);
app.listen(5000, () => {
    console.log("Backend Server running ");
});
