const express = require("express");
const app = express();

// ----------------------
// Built-in Middleware
// ----------------------
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// ----------------------
// Custom Logger Middleware
// ----------------------
const logger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
};

app.use(logger);

// ----------------------
// Dummy User Data
// ----------------------
let users = [
  { id: 1, name: "Aman", age: 22 },
  { id: 2, name: "Sara", age: 25 }
];

// ----------------------
// REST CRUD ROUTES
// ----------------------

// GET all users
app.get("/users", (req, res) => {
  res.status(200).json(users);
});

// GET one user by ID
app.get("/users/:id", (req, res) => {
  const user = users.find((u) => u.id == req.params.id);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.status(200).json(user);
});

// CREATE user
app.post("/users", (req, res) => {
  const { name, age } = req.body;

  if (!name || !age) {
    return res.status(400).json({ error: "Name and age are required" });
  }

  const newUser = {
    id: users.length + 1,
    name,
    age
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

// UPDATE user
app.put("/users/:id", (req, res) => {
  const user = users.find((u) => u.id == req.params.id);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  user.name = req.body.name || user.name;
  user.age = req.body.age || user.age;

  res.status(200).json(user);
});

// DELETE user
app.delete("/users/:id", (req, res) => {
  users = users.filter((u) => u.id != req.params.id);
  res.status(200).json({ message: "User deleted" });
});

// ----------------------
// Error Handling Middleware
// ----------------------
app.use((err, req, res, next) => {
  console.error("SERVER ERROR:", err.message);
  res.status(500).json({ error: "Internal Server Error" });
});

// ----------------------
// Start Server
// ----------------------
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
