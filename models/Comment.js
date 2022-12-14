const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  blogId: {
    type: String,
    required: true,
  },
  user: {
    type: Object,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = {
  Comment,
};
