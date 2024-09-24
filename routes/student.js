const express = require("express");
const studentcontroller = require("../controllers/studentcontroller");
const router = express.Router();
router.use(express.urlencoded({ extended: false }));

// Home route  --> jaise hi mulakat render se ho to views main chale jana
router.get("/", (req, res) => {
  res.render("home");
});

// Add Student route
router.post("/add/student", (req, res) => {
  studentcontroller.addStudent(req, res);
});

// get all students
router.get("/students", (req, res) => {
  studentcontroller.getStudents(req, res);
});

router.get("/edit/student/page/:id", (req, res) => {
  studentcontroller.getStudentForEdit(req, res);
});
module.exports = router;
