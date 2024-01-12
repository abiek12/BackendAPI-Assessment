const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");

//GET reset password routes
router.get("/reset-password/:id", (req, res) => {
  res.status(200).json({ message: "Welcome to Reset password page." });
  console.log(req.params.id);
});

//POST reset password routes
router.post("/reset-password/:id", (req, res) => {
  res.status(200).json(req.params.id);
});

module.exports = router;
