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
module.exports = router;
