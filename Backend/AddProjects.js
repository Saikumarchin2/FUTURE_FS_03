// AddProjects.js
// A Node.js Express server to manage projects with image uploads, using MongoDB + Cloudinary.
const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const { v2: cloudinary } = require("cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
require("dotenv").config();
const router = express.Router();
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "portfolio-projects", // Cloudinary folder name
    allowed_formats: ["jpg", "png", "jpeg", "webp"],
    public_id: (req, file) =>
      Date.now() + "-" + file.originalname.replace(/\s+/g, "_"),
  },
});

const upload = multer({ storage });

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true }, // Cloudinary URL
  skills: { type: [String], required: true },
  link: { type: String, default: "#", required: true },
});

const Project = mongoose.model("Project", projectSchema);

// GET all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    console.error("Error fetching projects:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

//GET single project
router.get("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ error: "Project not found" });
    res.json(project);
  } catch (err) {
    console.error("Error fetching project:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

//POST new project
router.post("/", upload.single("image"), async (req, res) => {
  try {
    console.log("Request Body:", req.body);
    console.log("Uploaded File:", req.file);
    const { title, description, skills, link } = req.body;

    if (!req.file || !req.file.path) {
      return res.status(400).json({ error: "Image upload failed" });
    }

    const skillsArray = skills ? skills.split(",").map((s) => s.trim()) : [];

    const newProject = new Project({
      title,
      description,
      image: req.file.path, // Cloudinary provides a public URL
      skills: skillsArray,
      link,
    });

    const savedProject = await newProject.save();
    res.status(201).json({
      success: true,
      message: "Project created successfully",
      project: savedProject,
    });
  } catch (err) {
    console.error("Error saving project:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

//PUT update project
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const { title, description, skills, link } = req.body;
    const updateData = { title, description, link };

    if (skills) updateData.skills = skills.split(",").map((s) => s.trim());
    if (req.file && req.file.path) updateData.image = req.file.path;

    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedProject)
      return res.status(404).json({ error: "Project not found" });

    res.json(updatedProject);
  } catch (err) {
    console.error("Error updating project:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

//DELETE project
router.delete("/:id", async (req, res) => {
  try {
    const deletedProject = await Project.findByIdAndDelete(req.params.id);
    if (!deletedProject)
      return res.status(404).json({ error: "Project not found" });

    res.json({ message: "Project deleted successfully" });
  } catch (err) {
    console.error("Error deleting project:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
