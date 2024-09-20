const Student = require("../models/Student");

async function addStudent(req, res) {
  try {
    console.log(req.body);
    let student = new Student(req.body);
    await student.save();
    res.end("Data is saved successfully !!!");
  } catch (err) {
    console.error("Error saving data:", err);
    // res.status(500).send("Error saving data");
  }
}

module.exports = {
  addStudent
};
