const Student = require("../models/studentModel");

// Add student
exports.addStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json({ message: "Student added", student });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all students (pagination + sorting)
exports.getStudents = async (req, res) => {
  try {
    const { page = 1, limit = 5, sort = "name" } = req.query;

    const students = await Student.find()
      .sort(sort)
      .skip((page - 1) * limit)
      .limit(Number(limit));

    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get student by ID
exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student)
      return res.status(404).json({ message: "Student not found" });

    res.json(student);
  } catch {
    res.status(400).json({ error: "Invalid student ID" });
  }
};

// Update student
exports.updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!student)
      return res.status(404).json({ message: "Student not found" });

    res.json({ message: "Student updated", student });
  } catch {
    res.status(400).json({ error: "Invalid update request" });
  }
};

// Delete student
exports.deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);

    if (!student)
      return res.status(404).json({ message: "Student not found" });

    res.json({ message: "Student deleted" });
  } catch {
    res.status(400).json({ error: "Invalid ID" });
  }
};
