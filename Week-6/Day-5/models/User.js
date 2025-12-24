const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: 3,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
  },
  role: {
    type: String,
    enum: ["Admin", "Customer", "Seller"],
    default: "Customer",
  },
  age: {
    type: Number,
    min: 18,
    max: 70,
  },
});

module.exports = mongoose.model("User", userSchema);
