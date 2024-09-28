const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes"); // Adjust path as needed

require("dotenv").config(); // Make sure to use dotenv for environment variables

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
const uri = process.env.MONGODB_URI; // Store your connection string in a .env file

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Atlas connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
