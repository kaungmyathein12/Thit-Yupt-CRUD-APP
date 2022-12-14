const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Blog must have a title"],
  },
  body: {
    type: String,
    required: [true, "Blog must have a body"],
  },
  image: String,
  reaction: Number,
});

const Blog = mongoose.model("Blog", blogSchema);
module.exports = {
  Blog,
};
