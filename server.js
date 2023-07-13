const fs = require("fs");
const express = require("express");
const app = express();
const mysql2 = require("mysql2");
const path = require("path");
const bodyParser = require("body-parser");
const port = 3002;

app.use(express.json());

const connection = mysql2.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "password",
  database: "EcomProducts",
});
connection.connect((error) => {
  if (error) {
    console.error("Error connecting to the database:", error);
  } else {
    console.log("Connected to the database!");
  }
});

app.get("/jsondata", (req, res) => {
  const query = "SELECT * FROM products ";
  connection.query(query, (error, results) => {
    if (error) {
      console.error("Error executing the query:", error);
      res.status(500).send("Internal Server Error");
    } else {
      res.status(200).json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`App is running on port ${port}...`);
});
