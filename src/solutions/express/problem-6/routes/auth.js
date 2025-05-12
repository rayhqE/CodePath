const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = express.Router();

const users = [];
const refreshTokens = [];

const accessSecret = "your-access-secret";
const refreshSecret = "your-refresh-secret";

// Middleware to verify access token
function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(401).send("Access Denied");

  jwt.verify(token, accessSecret, (err, user) => {
    if (err) return res.status(403).send("Invalid Token");
    req.user = user;
    next();
  });
}

// Register
router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const userExists = users.find((u) => u.username === username);
  if (userExists) return res.status(409).send("User already exists");
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });
  res.status(201).send("User registered");
});

// Login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign({ username }, accessSecret, {
      expiresIn: "15m",
    });
    const refreshToken = jwt.sign({ username }, refreshSecret);
    refreshTokens.push(refreshToken);
    res.json({ accessToken, refreshToken });
  } else {
    res.status(400).send("Invalid credentials");
  }
});

// Refresh token
router.post("/refresh", (req, res) => {
  const { token } = req.body;
  if (!token) return res.status(401).send("Refresh token required");
  if (!refreshTokens.includes(token))
    return res.status(403).send("Invalid refresh token");

  jwt.verify(token, refreshSecret, (err, user) => {
    if (err) return res.status(403).send("Invalid token");
    const newAccessToken = jwt.sign({ username: user.username }, accessSecret, {
      expiresIn: "15m",
    });
    res.json({ accessToken: newAccessToken });
  });
});

// Logout
router.post("/logout", (req, res) => {
  const { token } = req.body;
  const index = refreshTokens.indexOf(token);
  if (index > -1) refreshTokens.splice(index, 1);
  res.send("Logged out successfully");
});

// Protected route
router.get("/profile", verifyToken, (req, res) => {
  res.send(`Welcome ${req.user.username}, this is a protected route.`);
});

module.exports = router;
