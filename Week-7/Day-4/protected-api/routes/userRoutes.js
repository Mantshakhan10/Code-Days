const express = require("express");
const router = express.Router();

const { protect, authorizeRoles } = require("../middleware/authMiddleware");
const User = require("../models/User");

// Logged-in users only
router.get("/users", protect, async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
});

// Admin-only route
router.get(
  "/admin/users",
  protect,
  authorizeRoles("admin"),
  async (req, res) => {
    const users = await User.find().select("-password");
    res.json({ admin: req.user.name, users });
  }
);

module.exports = router;
