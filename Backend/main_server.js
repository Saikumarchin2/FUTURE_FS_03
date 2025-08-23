// main_server.js
// Main server file to run the Express application, connect to MongoDB, and set up routes for contact form and project management.
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const contactRoutes = require("./Contact_form_Server");
const projectRoutes = require("./AddProjects");
require("dotenv").config(); 
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));
app.use("/api/contact", contactRoutes);
app.use("/api/projects", projectRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
