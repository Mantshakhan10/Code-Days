require("dotenv").config();
const express = require("express");
const app = express();

// Import routes & middleware
const userRoutes = require("./routes/userRoutes");
const logger = require("./utils/logger");
const errorHandler = require("./middleware/errorHandler");

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.use("/api/users", userRoutes);

// Error handling middleware (always at end)
app.use(errorHandler);

// Port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
