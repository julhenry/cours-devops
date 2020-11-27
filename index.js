const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello World - Frédéric Dinand");
});

app.listen(process.env.PORT, "0.0.0.0", () => {
  console.log(`App listening at http://0.0.0.0:${process.env.PORT}`);
});