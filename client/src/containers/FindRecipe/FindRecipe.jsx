import React, { useEffect, useState } from "react";
import axios from "axios";
import IngredientsTable from "../../components/IngredientsTable/IngredientsTable";

const FindRecipe = () => {
  const [ingredients, setIngredients] = useState([]);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getIngredients();
  }, []);

  const getIngredients = () => {
    axios
      .get("/api/ingredients")
      .then((response) => {
        console.log(response.data);
        const ingredientsArray = response.data.data.map((ingredient) => {
          ingredient.isChecked = false;
          return ingredient;
        });
        setIngredients(ingredientsArray);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const findMatchingRecipes = () => {
    let checkIngredients = [];
    for (let i = 0; i < ingredients.length; i++) {
      if (ingredients[i].isChecked) {
        checkIngredients.push(ingredients[i]._id);
      }
    }
    axios
      .post("/api/recipes/find", { ingredients: checkIngredients })
      .then((response) => {
        setRecipes(response.data.data);
        if (response.data.data.length === 0) {
          alert("No matching recipes found.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCheckboxChange = (id) => {
    const updatedIngredients = ingredients.map((ingredient) => {
      if (ingredient._id === id) {
        ingredient.isChecked = !ingredient.isChecked;
      }
      return ingredient;
    });
    setIngredients(updatedIngredients);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h1 className="center-align">
            Select your available ingredients below.{" "}
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <button
            className="waves-effect waves-light btn"
            onClick={() => {
              findMatchingRecipes();
            }}
          >
            Find matching recipes
          </button>
          <span> </span>
          <button
            className="waves-effect waves-light btn"
            onClick={() => {
              setRecipes([]);
            }}
          >
            Clear recipes
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          {recipes.length > 0 && (
            <>
              {recipes.map((recipe) => (
                <>
                  <h1 key={recipe._id}>{recipe.name}</h1>
                  {recipe.ingredients.map((ingredient) => (
                    <p key={ingredient._id}>{ingredient.name}</p>
                  ))}
                </>
              ))}
            </>
          )}
          <IngredientsTable
            ingredients={ingredients}
            selectable={true}
            handleCheckboxChange={handleCheckboxChange}
          />
        </div>
      </div>
    </div>
  );
};

export default FindRecipe;
