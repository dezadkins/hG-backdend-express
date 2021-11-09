import express from "express";
import mongoose from "mongoose";

import { posts } from "./routes/posts.js";
import { MONGO_URI } from "./config/keys.js";

const app = express();

// CRUDING IS HAPPENING HERE GET, POST, PUT, PATCH, DELETE

app.use(express.json());

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB & Hidden Gems Connected"))
  .catch((err) => console.log(err));

app.get("/didwegetit", (req, res) => {
  res.send("We did get it! Wooohoo!");
});

app.use("/api/posts", posts);

const port = process.env.PORT || 8081;

app.listen(port, () => console.log(`${port} is listening to me`));
