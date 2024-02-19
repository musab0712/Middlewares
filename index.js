const express = require("express");

const app = express();

function userMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;
  if (username != "musab" && password != "hassan") {
    res.status(403).send("invalid username or password");
  } else {
    next();
  }
}

function kidneyMiddleware(req, res, next) {
  const kidneyId = req.query.id;
  if (kidneyId != 1 && kidneyId != 2) {
    res.status(403).send("Invalid kidney");
  } else {
    next();
  }
}

app.get("/health-checkup", userMiddleware, kidneyMiddleware, (req, res) => {
  res.send("your heart is healthy");
});

app.listen(3000);
