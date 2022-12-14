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
      let user = await User.findOne(req.body.email);
      if (!user) {
        return res
          .status(404)
          .json({ status: "fail", message: "user with this email not found" });
      } else {
        const token = generateToken(req.body.email);
        res.status(200).json({
          status: "success",
          token,
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

exports.registerUser = async (req, res) => {
  try {
    const { error } = validateUser(req.body);
    if (error)
      return res.status(400).json({
        status: "fail",
        message: error,
      });
    let user = User.findOne({ email: req.body.email });
    if (user)
      return res
        .status(400)
        .json({ status: "fail", message: "User already exists" });
    else user = await User.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: "fail",
      message: error,
    });
  }
};
