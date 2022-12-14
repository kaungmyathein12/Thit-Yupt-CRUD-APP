const { Blog, validateBlog } = require("./../models/Blog");
exports.createBlog = async (req, res) => {
  const reqData = {
    title: req.body.title,
    body: req.body.body,
  };
  const { error } = validateBlog(reqData);
  if (error) {
    return res.status(400).json({
      status: "fail",
      message: error,
    });
  } else {
    const blog = await Blog.create(req.body);
  }
};
