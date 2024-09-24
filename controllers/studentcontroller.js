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

async function getStudentForEdit(req, res) {
  try {
    // res.render("studentedit", { student: student });
    let id = req.params.id;
    console.log("Student Id: " + id);
    let student = await Student.findOne({ _id: id });
    console.log("Student: " + student);
    // res.send(student);
    res.render("studentforupdate", { student: student });
  } catch (err) {
    console.error("Something went wrong!!", err);
  }
}
module.exports = {
  addStudent,
  getStudents,
  getStudentForEdit
};
