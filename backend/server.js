require("dotenv").config();
const express = require("express");
const cors = require("cors");

const queryRoutes = require("./routes/queryRoutes");
const hintRoutes = require("./routes/hintRoutes");
const assignmentRoutes =
require("./routes/assignmentRoutes");

const app = express();


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200); // 👈 preflight handle
  }

  next();
});

app.use(express.json());

app.use("/api",assignmentRoutes);
app.use("/api", queryRoutes);
app.use("/api", hintRoutes);
app.get("/", (req, res) => {
  res.send("CipherSQLStudio Backend is running ");
});
app.listen(5000, () => {
  console.log("Server running on port 5000");
});