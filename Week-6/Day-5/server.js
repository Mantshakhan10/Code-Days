require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Error:", err));

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on port ${process.env.PORT}`);
});
