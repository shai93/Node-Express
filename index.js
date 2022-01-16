const express = require("express");
const app = express();
const port = 3000;

//to read or to fetch the book details
app.get("/book", function (req, res) {
  res.send("Read Book SuccessFully");
});

app.listen(port, function () {
  console.log("App is running on " + port);
});
