const mongoose = require("mongoose");
const Joi = require("joi");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "UserName required"],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "UserName required"],
  },
});

const User = mongoose.model("User", userSchema);

const validateUser = (req) => {
  const schema = Joi.object({
    email: Joi.string()
      .required()
      .unique()
      .email({ tlds: { allows: ["com", "net", "dev"] } }),
    password: Joi.string().min(4).max(255).required(),
  });
  return schema.validate(req.body);
};

module.exports = User;
module.exports = validateUser;
