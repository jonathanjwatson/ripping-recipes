import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import IngredientsTable from "../../components/IngredientsTable/IngredientsTable";

class Ingredients extends Component {
  state = {
    ingredients: [],
  };

  componentDidMount() {
    this.getIngredients();
  }

  getIngredients = () => {
    axios
      .get("/api/ingredients")
      .then((response) => {
        // console.log(response.data);
        this.setState({
          ingredients: response.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  deleteIngredient = (id) => {
    axios
      .delete(`/api/ingredients/${id}`)
      .then((response) => {
        console.log(response.data);
        this.getIngredients();
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
            <h1>Ingredients</h1>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <Link
              to="/ingredients/new"
              className="waves-effect waves-light btn"
            >
              Create new ingredient
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col s12"></div>
          <div className="col s12">
            <IngredientsTable ingredients={this.state.ingredients}/>
            {this.state.ingredients.length === 0 && (
              <p>No ingredients returned.</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Ingredients;
