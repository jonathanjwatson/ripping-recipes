const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const IngredientsController = require("./controllers/ingredientsController");
const RecipesController = require("./controllers/recipesController");
const UsersController = require("./controllers/usersController");
const AuthController = require("./controllers/authController");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

app.use(IngredientsController);
app.use(RecipesController);
app.use(UsersController);
app.use(AuthController);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/mern-starter", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Successfully connected to database.");
  })
  .catch((err) => {
    console.log("Unable to connect to database.");
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});
