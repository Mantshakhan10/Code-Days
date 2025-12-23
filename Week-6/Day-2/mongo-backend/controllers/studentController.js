const Student = require("../models/Student");

// CREATE student
exports.createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// GET all students
exports.getStudents = async (req, res) => {
  const students = await Student.find();
  res.json(students);
};
