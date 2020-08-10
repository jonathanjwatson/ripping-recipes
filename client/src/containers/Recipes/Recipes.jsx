import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

class Recipes extends Component {
  state = {
    recipes: [],
  };

  componentDidMount() {
    this.getRecipes();
  }

  getRecipes = () => {
    axios
      .get("/api/recipes")
      .then((response) => {
        // console.log(response.data);
        this.setState({
          recipes: response.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h1>Recipes</h1>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <Link to="/recipes/new" className="waves-effect waves-light btn">
              Create new recipe
            </Link>
            <span> </span>
            <Link to="/recipes/find" className="waves-effect waves-light btn">
              Find your next recipe
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            {this.state.recipes.map((recipe) => (
              <div key={recipe._id}>
                <h3>{recipe.name}</h3>
                {recipe.ingredients.map((ingredient) => (
                  <p key={ingredient._id}>
                    {ingredient.name}
                    <span> </span>
                    {ingredient.isVegetarian && (
                      <FontAwesomeIcon icon={faLeaf} color="#26a69a" />
                    )}
                  </p>
                ))}
              </div>
            ))}
          </div>
          <div className="col s12">
            {this.state.recipes.length === 0 && <p>No recipes returned.</p>}
          </div>
        </div>
      </div>
    );
  }
}

export default Recipes;
