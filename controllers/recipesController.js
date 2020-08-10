const express = require("express");
const router = express.Router();
const db = require("../models");

// READ ALL
router.get("/api/recipes", (req, res) => {
  db.Recipe.find({})
    .populate("ingredients")
    .then((foundRecipes) => {
      res.json({
        error: false,
        data: foundRecipes,
        message: "Successfully retrieved all recipes.",
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: true,
        data: null,
        message: "Unable to retrieve all recipes. ",
      });
    });
});

// FIND MATCHING RECIPES BY INGREDIENTS
router.post("/api/recipes/find", (req, res) => {
  db.Recipe.find({ ingredients: { $in: req.body.ingredients } })
    .populate("ingredients")
    .then((foundRecipes) => {
      res.json({
        error: false,
        data: foundRecipes,
        message: "Found the following recipes matching search criteria.",
      });
    });
});
// READ ONE

// CREATE
router.post("/api/recipes", (req, res) => {
  // TODO: sanitize req.body
  db.Recipe.create(req.body)
    .then((createdRecipe) => {
      res.json({
        error: false,
        data: createdRecipe,
        message: "Successfully created new recipe.",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Failed to create new recipe.",
      });
    });
});
// EDIT

// DELETE

module.exports = router;
