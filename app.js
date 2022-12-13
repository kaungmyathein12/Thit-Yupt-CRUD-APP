require("dotenv").config({ path: ".env" });
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/api/v1/user", (req, res) => {
  res.json({
    status: "success",
    message: "This route is not defined",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, (req, res) => {
  console.log("server is running");
});
