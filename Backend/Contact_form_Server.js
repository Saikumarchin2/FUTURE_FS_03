// Contact_form_Server.js
// A Node.js Express server to handle contact form submissions, store them in MongoDB, and send email notifications using Nodemailer.
const express = require("express");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const router = express.Router(); 
require("dotenv").config();
// Define Schema & Model
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mail: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const transporter = nodemailer.createTransport({
  service: "gmail", 
  auth: {
    user: process.env.EMAIL_USER ,
    pass: process.env.EMAIL_PASS ,
  },
});
const Contact = mongoose.model("Contact", contactSchema);

router.post("/", async (req, res) => {
  const { name, mail, subject, message } = req.body;

  if (!name || !mail || !subject || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const newContact = new Contact({ name, mail, subject, message });
    await newContact.save();

    // Send mail to admin
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `📩 New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Message from Portfolio Contact Form</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${mail}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    // Send acknowledgment to user
    await transporter.sendMail({
      from: `"Saikumar Mukkamula" <${process.env.EMAIL_USER}>`,
      to: mail,
      subject: "We’ve received your message – Thank you!",
      html: `
        <h2>Thank You for Reaching Out!</h2>
        <p>Hello ${name},</p>
        <p>Thank you for getting in touch through my portfolio website. 
        I’ve received your message and will get back to you shortly.</p>
        <p>Meanwhile, feel free to explore my work and projects:</p>
        <p>🌐<a href="https://skyportfoliograb.netlify.app/" target="_blank">My Portfolio</a></p>
        <br/>
        <p>Looking forward to connecting with you!</p>
        <p>Best regards,<br/><b>Saikumar Mukkamula</b><br/>Developer | Data Science Enthusiast</p>
        `,
    });

    res.status(201).json({ success: true, message: "Message saved & email sent!" });
  } catch (err) {
    console.error("Error saving contact:", err);
    res.status(500).json({ error: "Server error. Try again later." });
  }
});

// GET all contacts
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    console.error("Error fetching contacts:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;