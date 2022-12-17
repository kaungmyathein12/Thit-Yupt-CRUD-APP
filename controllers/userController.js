const bcrypt = require("bcrypt");
const { validateUser, generateToken, User } = require("./../models/User");
exports.loginUser = async (req, res) => {
  try {
    const { error } = validateUser(req.body);
    if (error) {
      return res.status(400).json({
        status: "fail",
        message: error,
      });
    } else {
      let user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res
          .status(404)
          .json({ status: "fail", message: "User with this email not found" });
      } else {
        const comparePassword = await bcrypt.compare(
          req.body.password,
          user.password
        );
        if (comparePassword) {
          const token = generateToken(req.body.email);
          res.status(200).json({
            status: "success",
            body: {
              token,
            },
          });
        } else {
          res.status(400).json({
            status: "fail",
            message: "wrong password",
          });
        }
      }
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
      return res.status(400).json({
        status: "fail",
        message: error,
      });
    } else {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ status: "fail", message: "User already exists" });
      } else {
        user = new User(req.body);
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        await user.save();
        const token = generateToken(user.email);
        res.status(200).json({
          status: "success",
          body: {
            token,
          },
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.json({
      status: "fail",
      message: error,
    });
  }
};
