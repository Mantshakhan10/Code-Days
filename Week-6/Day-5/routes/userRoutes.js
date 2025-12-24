const express = require("express");
const User = require("../models/User");

const router = express.Router();

// Create User
router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
