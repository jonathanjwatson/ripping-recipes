const express = require("express");
const router = express.Router();
const db = require("../models");

// READ ALL

// READ ONE
router.get("/api/users/:id", (req, res) => {
  db.User.findById(req.params.id).then((foundUser) => {
    res.json({
      error: false,
      data: foundUser,
      message: "Successfully retrieved requested user.",
    });
  });
});

// CREATE
router.post("/api/users", (req, res) => {
  db.User.create(req.body)
    .then((createdUser) => {
      res.json({
        error: false,
        data: createdUser,
        message: "Successfully created new user.",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Unable to create new user.",
      });
    });
});

// UPDATE

// DELETE

module.exports = router;
