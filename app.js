require("dotenv").config({ path: ".env" });
const express = require("express");
const mongoose = require("mongoose");
const mainRouter = require("./routes");
const app = express();

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE_URL, (req, res) => {
  console.log("DB connected successful");
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1", mainRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, (req, res) => {
  console.log("server is running");
});
