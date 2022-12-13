const express = require("express");
const Router = express.Router();

Router.get("/", async (req, res) => {});

Router.post("/", async (req, res) => {
  console.log(req.body);
});
