const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json());

const userRoutes = require("./userRoutes");
app.use("/api", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
