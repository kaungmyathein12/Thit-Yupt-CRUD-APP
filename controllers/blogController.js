const { Blog, validateBlog } = require("./../models/Blog");
exports.getAllBlog = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json({
      status: "success",
      data: blogs,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

exports.createBlog = async (req, res) => {
  const reqData = {
    userId: req.body.userId,
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
    res.status(201).json({
      status: "success",
      data: blog,
    });
  }
};
