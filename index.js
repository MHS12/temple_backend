const express = require("express");
const app = express();
const port = 3000;
const imageRouter = require("./router/imageRouter");
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/about", (req, res) => {
  res.send("About Us");
});
app.use("/image", imageRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
