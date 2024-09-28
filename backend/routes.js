const express = require("express");

const router = express.Router();
const User = require("./Models/User"); // Adjust path as needed

// Route to get all users
router.get("/api/users", async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users from the database

    res.json(users); // Send users data as a response
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
