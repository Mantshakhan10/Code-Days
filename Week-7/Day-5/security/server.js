require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const mongoose = require("mongoose");

const app = express();

// JSON parser
app.use(express.json());

/* ---------------- SECURITY MIDDLEWARES ---------------- */

// 1️⃣ CORS (Controlled Access)
app.use(cors({
  origin: ["http://localhost:5173"],
  methods: ["GET", "POST", "PUT", "DELETE"],
}));

// 2️⃣ Helmet (Secure Headers)
app.use(helmet());

// 3️⃣ Rate Limiting (Anti-Brute Force)
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 200,
  message: "Too many requests from this IP. Try later."
});
app.use(limiter);

/* ---------------- ROUTES ---------------- */

app.use("/api", require("./routes/userRoutes"));

/* ---------------- DATABASE ---------------- */

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

/* ---------------- SERVER ---------------- */

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});
