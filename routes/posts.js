import express from "express";

import { Post } from "../models/post.js";

const router = express.Router();

router.get("/", (req, res) => {
  Post.find()
    .then((posts) => res.json(posts))
    .catch((err) => res.status(404).json(err));
});

router.post("/", (req, res) => {
  const newPost = new Post({
    name: req.body.name,
    content: req.body.content,
  });
  newPost
    .save()
    .then((post) => res.json(post))
    .catch((err) => res.status(404).json(err));
});

router.delete("/:post_id", (req, res) => {
  Post.findOneAndDelete({ _id: req.params.post_id })
    .then((post) => res.json({ _id: post._id }))
    .catch((err) => res.status(404).json(err));
});

export const posts = router;
