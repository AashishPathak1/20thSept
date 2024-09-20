// path is a inbuilt module
const path = require("path");
const express = require("express");
const connection = require("./connection");
const student = require("./routes/student");
const app = express();

//calling the connection for connecting the mongoDB
connection();
app.use(student);
// setting up the view engine
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// requseting the port number for server requests
app.listen(3000, (err) => {
  if (err) {
    console.log("Error starting server", err);
  } else {
    console.log("Server started at http://localhost:3000");
  }
});
