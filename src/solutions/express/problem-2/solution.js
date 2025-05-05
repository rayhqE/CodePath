const express = require("express");
const app = express();

function logRequest(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
}

function validateApiKey(req, res, next) {
  const apiKey = req.headers["api-key"];
  if (apiKey === "valid-key") {
    next();
  } else {
    const err = new Error("Unauthorized");
    err.status = 401;
    next(err);
  }
}

function errorHandler(err, req, res, next) {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: err.message || "Internal Server Error",
  });
}

app.use(logRequest);
app.use(validateApiKey);
app.use(express.json());

app.post("/echo", (req, res) => {
  res.json(req.body);
});

app.use(errorHandler);

module.exports = app;       