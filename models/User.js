const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
});

const User = mongoose.model("User", userSchema);

const generateToken = (email) => {
  return jwt.sign(email, process.env.JWT_SECTECT_KEY);
};

const validateUser = (req) => {
  const schema = Joi.object({
    email: Joi.string()
      .required()
      .email({ tlds: { allows: ["com", "net", "dev"] } }),
    password: Joi.string().min(4).max(255).required(),
  });
  return schema.validate(req.body);
};

module.exports = {
  User,
  validateUser,
  generateToken,
};
