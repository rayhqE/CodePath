const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Configure static file serving

app.use(
  express.static(path.join(__dirname, "public"), {
    maxAge: "2w",
  })
);

app.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads"), {
    maxAge: "2w",
  })
);
// Handle 404s

app.use((req, res) => {
  res.status(404).send("File not found");
});

app.listen(PORT, () => {
  console.log(`App is listening on port:${PORT}`);
});
