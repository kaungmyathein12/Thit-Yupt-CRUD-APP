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

exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res
        .status(404)
        .json({ status: "fail", message: "Blog not found" });
    } else {
      res.status(200).json({
        status: "success",
        data: blog,
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const { id } = req.params.id;
    const blog = await Blog.findByIdAndUpdate(id, req.body);
    if (!blog) {
      throw new error("Blog with the id not found");
    } else {
      res.status(202).json({
        status: "success",
        body: blog,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.createBlog = async (req, res) => {
  const reqData = {
    title: req.body.title,
    body: req.body.body,
    image: req.body.image,
    special: req.body.special,
    type: req.body.type,
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
