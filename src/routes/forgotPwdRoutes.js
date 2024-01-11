const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");
const crypto = require("crypto");

//GET forgot password routes
router.get("/forgot-password", (req, res) => {
  res.status(200).json({ message: "Forgot password?" });
});

//POST forgot password routes
router.post("/forgot-password", (req, res) => {
  res.json({ message: "Forgot Password?" });
});

module.exports = router;
