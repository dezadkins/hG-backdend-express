import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import multer from "multer";

import { posts } from "./routes/posts.js";
import { MONGO_URI } from "./config/keys.js";
const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // Set EJS as templating engine
// app.set("view engine", "ejs");

// CRUDING IS HAPPENING HERE GET, POST, PUT, PATCH, DELETE

app.use(express.json());

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB & Hidden Gems Connected"))
  .catch((err) => console.log(err));

app.get("/didwegetit", (req, res) => {
  res.send("We did get it! Wooohoo!");
});

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});
let upload = multer({ storage: storage });

app.use("/api/posts", posts);

const port = process.env.PORT || 8081;

app.listen(port, () => console.log(`${port} is listening to me`));
