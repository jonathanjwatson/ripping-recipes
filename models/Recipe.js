const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Recipe name is required.",
  },
  ingredients: [
    {
      type: Schema.Types.ObjectId,
      ref: "Ingredient",
    },
  ],
});

const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;
