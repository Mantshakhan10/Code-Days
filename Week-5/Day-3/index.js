const express = require("express");
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.send("Express API is working...");
});

// About Route
app.get("/about", (req, res) => {
  res.send("This is the About page!");
});

// POST Route
app.post("/contact", (req, res) => {
  res.send("Contact form submitted!");
});

// JSON Response Route
app.get("/api/user", (req, res) => {
  res.json({
    id: 1,
    name: "Ananya",
    role: "Intern",
    skills: ["Node.js", "Express.js", "Git"]
  });
});

// Route Parameter Example
app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`User ID is: ${userId}`);
});

// Query String Example
app.get("/search", (req, res) => {
  const query = req.query;
  res.json(query);
});

// Start Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
