require("dotenv").config();
const express = require("express");
const cors = require("cors");

const queryRoutes = require("./routes/queryRoutes");
const hintRoutes = require("./routes/hintRoutes");
const assignmentRoutes = require("./routes/assignmentRoutes");

const app = express();


app.use(cors());


app.use(express.json());

// routes
app.use("/api", assignmentRoutes);
app.use("/api", queryRoutes);
app.use("/api", hintRoutes);

app.get("/", (req, res) => {
  res.send("CipherSQLStudio Backend is running");
});

//FIX PORT 
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});