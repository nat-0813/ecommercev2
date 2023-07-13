const fs = require("fs");
const express = require("express");
const app = express();
const mysql = require("mysql");
const path = require("path");
const bodyParser = require("body-parser");
const port = 5000;
app.use(express.json());
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "nodelogin",
});
connection.connect((error) => {
  if (error) {
    console.error("Error connecting to the database:", error);
  } else {
    console.log("Connected to the database!");
  }
});
app.listen(port, () => {
  console.log(`App is running on port ${port}...`);
});
