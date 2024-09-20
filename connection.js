const mongoose = require("mongoose");

//Establishing the Connection to MongoDB
async function connection() {
  try {
    await mongoose.connect("mongodb://localhost:27017/batch-2-20thSept");
    console.log("Conection is established with MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}

module.exports = connection;
