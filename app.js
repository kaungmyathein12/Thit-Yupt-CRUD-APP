require("dotenv").config({ path: ".env" });
const express = require("express");
const app = express();

app.use(express.json());
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Hello");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, (req, res) => {
  console.log("server is running");
});
