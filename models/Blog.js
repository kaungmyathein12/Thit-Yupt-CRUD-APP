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
  reaction_count: Number,
});

const Blog = mongoose.model("Blog", blogSchema);

const validateBlog = (req) => {
  const schema = Joi.object({
    userId: Joi.string().required(),
    title: Joi.string().min(10).max(255).required(),
    body: Joi.string().required(),
  });
  return schema.validate(blogSchema);
};
module.exports = {
  Blog,
  validateBlog,
};
