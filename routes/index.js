const express = require("express");
// Route
const userRouter = require("./userRoutes");
const blogRouter = require("./blogRoutes");
// middleware
const auth = require("./../middleware/auth");

const MainRouter = express.Router();

MainRouter.use("/auth", userRouter);
MainRouter.use("/blog", auth, blogRouter);

module.exports = MainRouter;
