const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const db = require("../models");

// LOGIN
router.post("/api/login", (req, res) => {
  //   console.log(req.body);
  const email = req.body.email.toLowerCase();
  db.User.findOne({ email: email }).then((foundUser) => {
    // console.log("FOUND USER: ", foundUser);
    if (foundUser.password === req.body.password) {
      // send back a token.
      const privateKey = "supersecretpassword";
      jwt.sign({ email: foundUser.email }, privateKey, function (err, token) {
        // console.log(token);
        res.json({
          error: false,
          data: token,
          message: "Successfully authenticated user. ",
        });
      });
    } else {
      res.status(401).json({
        error: true,
        data: null,
        message: "Unable to authenticate user. Please try again.",
      });
    }
  });
});

module.exports = router;
