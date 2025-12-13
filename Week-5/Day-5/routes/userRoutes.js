const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// CRUD Routes
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.post("/", userController.createUser);

// Dynamic route (Task 3)
router.get("/:id/:section", (req, res) => {
  const { id, section } = req.params;
  res.json({
    userId: id,
    section: section
  });
});

module.exports = router;
