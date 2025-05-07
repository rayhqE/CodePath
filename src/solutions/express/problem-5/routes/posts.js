const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

let posts = [];

router.get("/posts", (req, res) => {
  let { author, page = 1, limit = 10 } = req.query;
  page = parseInt(page);
  limit = parseInt(limit);

  let filteredPosts = posts;

  if (author) {
    filteredPosts = filteredPosts.filter(
      (post) => post.author.toLowerCase() === author.toLowerCase()
    );
  }

  const start = (page - 1) * limit;
  const paginated = filteredPosts.slice(start, start + limit);

  res.status(200).json({
    total: filteredPosts.length,
    page,
    limit,
    data: paginated,
  });
});

router.get("/posts/:id", (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).json({ error: "Post not found" });
  res.status(200).json(post);
});

router.post(
  "/posts",
  [
    check("title").notEmpty().withMessage("Title is required"),
    check("content").notEmpty().withMessage("Content is required"),
    check("author").notEmpty().withMessage("Author is required"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const newPost = {
      id: posts.length + 1,
      title: req.body.title,
      content: req.body.content,
      author: req.body.author,
    };

    posts.push(newPost);
    res.status(201).json(newPost);
  }
);

router.put(
  "/posts/:id",
  [
    check("title").optional().notEmpty().withMessage("Title cannot be empty"),
    check("content")
      .optional()
      .notEmpty()
      .withMessage("Content cannot be empty"),
    check("author").optional().notEmpty().withMessage("Author cannot be empty"),
  ],
  (req, res) => {
    const post = posts.find((p) => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).json({ error: "Post not found" });

    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    Object.assign(post, req.body);
    res.status(200).json(post);
  }
);

router.delete("/posts/:id", (req, res) => {
  const index = posts.findIndex((p) => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: "Post not found" });

  posts.splice(index, 1);
  res.status(204).send();
});

module.exports = router;
