const express = require("express");
const router = express.Router();
const db = require("../models");

// READ ALL
router.get("/api/ingredients", (req, res) => {
  db.Ingredient.find({})
    .then((foundIngredients) => {
      res.json({
        error: false,
        data: foundIngredients,
        message: "Successfully retrieved all ingredients.",
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: true,
        data: null,
        message: "Unable to retrieve all ingredients. ",
      });
    });
});
// READ ONE
router.get("/api/ingredients/:id", (req, res) => {
  db.Ingredient.findById(req.params.id)
    .then((foundIngredient) => {
      res.json({
        error: false,
        data: foundIngredient,
        message: "Successfully retrieved ingredient.",
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: true,
        data: null,
        message: "Unable to retrieve ingredient. ",
      });
    });
});

// CREATE
router.post("/api/ingredients", (req, res) => {
  db.Ingredient.create(req.body)
    .then((createdIngredient) => {
      res.json({
        error: false,
        data: createdIngredient,
        message: "Successfully created new ingredient.",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Failed to create new ingredient.",
      });
    });
});
// EDIT
router.put("/api/ingredients/:id", (req, res) => {
  db.Ingredient.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  })
    .then((updatedIngredient) => {
      res.json({
        error: false,
        data: updatedIngredient,
        message: "Successfully updated ingredient.",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Failed to updated ingredient.",
      });
    });
});

// DELETE

router.delete("/api/ingredients/:id", (req, res) => {
  db.Ingredient.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.json({
        error: false,
        data: result,
        message: "Successfully deleted ingredient.",
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: true,
        data: null,
        message: "Failed to delete requested ingredient.",
      });
    });
});

module.exports = router;
