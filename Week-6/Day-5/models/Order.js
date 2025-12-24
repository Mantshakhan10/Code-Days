const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // 🔥 relationship
    required: true,
  },
});

module.exports = mongoose.model("Order", orderSchema);
