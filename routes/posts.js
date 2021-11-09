import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  const posts = [
    { _id: 1, name: "Elena Marquez", content: "San Francisco! Places to Eat" },
    { _id: 2, name: "Gil Guedes", content: "Columbus, OH. A true hidden gem" },
    { _id: 3, name: "Marc Graham", content: "Best places to be in Boston" },
  ];
  res.json(posts);
});

router.post("/", (req, res) => {
  const post = req.body;
  res.json(post);
});

router.delete("/:post_id", (req, res) => {
  const _id = req.params.post_id;
  res.json(id);
});

export const posts = router;
