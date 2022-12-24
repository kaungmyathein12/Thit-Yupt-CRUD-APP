const express = require("express");
const blogController = require("./../controllers/blogController");
const auth = require("../middleware/auth");
const router = express.Router();

router
  .route("/")
  .get(blogController.getAllBlog)
  .post(auth, blogController.createBlog);

router.route("/:id").get(blogController.getBlogById);

module.exports = router;
