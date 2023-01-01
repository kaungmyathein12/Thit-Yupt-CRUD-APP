const mongoose = require("mongoose");
const Joi = require("joi");
const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Blog must have a title"],
    unique: true,
  },
  description: {
    type: String,
    unique: true,
  },
  body: {
    type: String,
    required: [true, "Blog must have a body"],
  },
  image: {
    type: String,
    required: [true, "Blog must have a image"],
  },
  special: {
    type: Boolean,
    required: [true, "Blog must have special type <boolean>"],
  },
  type: {
    type: Array,
    required: [true, "Blog must have type"],
  },
  created_At: {
    type: Date,
    default: Date.now(),
  },
});

const Blog = mongoose.model("Blog", blogSchema);

const validateBlog = (req) => {
  const schema = Joi.object({
    title: Joi.string().min(2).max(255).required(),
    body: Joi.string().required(),
    image: Joi.string().required(),
    type: Joi.array().required(),
    special: Joi.boolean().required(),
  });
  return schema.validate(req);
};
module.exports = {
  Blog,
  validateBlog,
};
