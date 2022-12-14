const mongoose = require("mongoose");
const Joi = require("joi");
const blogSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: [true, "Blog must have a title"],
  },
  body: {
    type: String,
    required: [true, "Blog must have a body"],
  },
  image: String,
  reaction_count: {
    type: Number,
    default: 0,
  },
});

const Blog = mongoose.model("Blog", blogSchema);

const validateBlog = (req) => {
  const schema = Joi.object({
    userId: Joi.string().required(),
    title: Joi.string().min(2).max(255).required(),
    body: Joi.string().required(),
  });
  return schema.validate(req);
};
module.exports = {
  Blog,
  validateBlog,
};
