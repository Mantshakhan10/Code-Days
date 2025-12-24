const express = require("express");
const Order = require("../models/Order");

const router = express.Router();

// Create Order
router.post("/", async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get Orders with User Details
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().populate("user", "name email role");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
