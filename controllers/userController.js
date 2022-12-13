const { validateUser } = require("./../models/User");
const jwt = require("jsonwebtoken");
exports.createUser = async (req, res) => {
  try {
    const { error } = validateUser(req.body);
    if (error) {
      console.log(error);
      return res.status(400).json({
        status: "fail",
        message: error,
      });
    } else {
      res.status(200).json({
        status: "success",
        message: "OK",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      status: "fail",
      message: error,
    });
  }
};

exports.registerUser = async (req, res) => {
  try {
    const { error } = validateUser(req.body);
    if (error) {
      console.log(error);
      return res.status(400).json({
        status: "fail",
        message: error,
      });
    } else {
      res.status(200).json({
        status: "success",
        message: "OK",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      status: "fail",
      message: error,
    });
  }
};
