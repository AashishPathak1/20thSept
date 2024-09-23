const Student = require("../models/Student");

async function addStudent(req, res) {
  try {
    console.log(req.body);
    let student = new Student(req.body);
    await student.save();
    // res.end("Data is saved successfully !!!");
    res.render("studentinsert");
  } catch (err) {
    console.error("Error saving data:", err);
  }
}

async function getStudents(req, res) {
  try {
    // console.log(req.body);
    let students = await Student.find({});
    // res.send(students);
    res.render("studentlist", { students: students });
  } catch (err) {
    console.error("Something went wrong!!", err);
  }
}

module.exports = {
  addStudent,
  getStudents
};
