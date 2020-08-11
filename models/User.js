const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    trim: true,
    required: "Email address is required.",
    unique: true,
  },
  password: {
    type: String,
    trim: true,
    required: "Password is required.",
  },
  firstName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  ingredients: [
    {
      type: Schema.Types.ObjectId,
      ref: "Ingredients",
    },
  ],
});

// Write a method to convert email addresses to all lowercase before saving to the database. 

const User = mongoose.model("User", UserSchema);

module.exports = User;
