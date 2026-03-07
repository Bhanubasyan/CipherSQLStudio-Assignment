require("dotenv").config();
const express = require("express");
const cors = require("cors");

const queryRoutes = require("./routes/queryRoutes");
const hintRoutes = require("./routes/hintRoutes");
const assignmentRoutes =
require("./routes/assignmentRoutes");

const app = express();

app.use(cors({
  origin: "http://localhost:3000"
}));

app.use(express.json());

app.use("/api",assignmentRoutes);
app.use("/api", queryRoutes);
app.use("/api", hintRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});