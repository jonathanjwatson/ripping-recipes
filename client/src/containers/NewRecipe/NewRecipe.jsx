import React, { Component } from "react";
import axios from "axios";
import IngredientsTable from "../../components/IngredientsTable/IngredientsTable";

class NewRecipe extends Component {
  state = {
    ingredients: [],
    name: "",
  };

  componentDidMount() {
    axios
      .get("/api/ingredients")
      .then((response) => {
        console.log(response.data);
        const ingredientsArray = response.data.data.map((ingredient) => {
          ingredient.isChecked = false;
          return ingredient;
        });
        this.setState({
          ingredients: ingredientsArray,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleRecipeNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleCheckboxChange = (id) => {
    const updatedIngredients = this.state.ingredients.map((ingredient) => {
      if (ingredient._id === id) {
        ingredient.isChecked = !ingredient.isChecked;
      }
      return ingredient;
    });
    this.setState({
      ingredients: updatedIngredients,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // const checkedIngredients = this.state.ingredients
    //   .filter((ingredient) => ingredient.isChecked)
    //   .map((ingredient) => ingredient._id);
    // console.log(checkedIngredients);
    let checkedIngredients = [];
    for (let i = 0; i < this.state.ingredients.length; i++) {
      if (this.state.ingredients[i].isChecked) {
        checkedIngredients.push(this.state.ingredients[i]._id);
      }
    }

    const postBody = {
      name: this.state.name,
      ingredients: checkedIngredients,
    };
    axios
      .post("/api/recipes", postBody)
      .then((response) => {
        console.log(response.data);
        window.alert(`Successfully created new recipe: ${this.state.name}`);
        this.props.history.push("/recipes");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s6">
            <form className="col s12" onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleRecipeNameChange}
                  />
                  <label htmlFor="name">Recipe Name</label>
                </div>
              </div>
              <div className="row">
                <div className="col s12">
                  <button
                    className="btn waves-effect waves-light"
                    type="submit"
                  >
                    Create
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col s6">
            <IngredientsTable
              ingredients={this.state.ingredients}
              selectable={true}
              handleCheckboxChange={this.handleCheckboxChange}
            />
            {/* {this.state.ingredients.map((ingredient) => (
              <div className="row" key={ingredient._id}>
                <div className="input-field col s12">
                  <label>
                    <input
                      type="checkbox"
                      name="isVegetarian"
                      checked={ingredient.isChecked}
                      onChange={() => {
                        this.handleCheckboxChange(ingredient._id);
                      }}
                    />
                    <span>
                      {ingredient.name}{" "}
                      {ingredient.isVegetarian && (
                        <FontAwesomeIcon icon={faLeaf} color="#26a69a"/>
                      )}
                    </span>
                  </label>
                </div>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    );
  }
}

export default NewRecipe;
