import express from "express";

const app = express();

// CRUDING IS HAPPENING HERE GET, POST, PUT, PATCH, DELETE

app.use(express.json());

app.get("/didwegetit", (req, res) => {
  res.send("We did get it! Wooohoo!");
});

const port = process.env.PORT || 8081;

app.listen(port, () => console.log(`${port} is listening to me`));
