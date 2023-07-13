const express = require("express");
const mysql = require("mysql");
const path = require("path");

const app = express();

const conn = mysql.createConnection({
  // setting connection to mysl
  host: "",
  user: "",
  password: "",
  database: "",
});
