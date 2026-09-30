const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const contactRoutes = require("./routes/contactRoutes");
const tournamentRoutes = require("./routes/tournamentRoutes");

const app = express();

app.use(cors({
  origin: "https://eco-con-net.vercel.app"
}));

app.use(express.json());

app.use("/api/contact", contactRoutes);
app.use("/api/tournaments", tournamentRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log("MongoDB connection error:", error));

app.get("/", (req, res) => {
  res.json({
    message: "Eco-Connect Backend is running"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
app.post("/api/contact", (req, res) => {
  console.log(req.body);

  res.json({
    success: true,
    message: "Suggestion submitted successfully"
  });
});

app.post("/api/contact", (req, res) => {
  console.log(req.body);

  res.json({
    success: true,
    message: "Suggestion submitted successfully"
  });
});
app.post("/api/tournaments", (req, res) => {
  console.log(req.body);

  res.json({
    success: true,
    message: "Tournament submitted successfully"
  });
});
