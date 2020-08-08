import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

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
          <div className="col s12">
            {this.state.ingredients.map((ingredient) => (
              <div key={ingredient._id}>
                <p>
                  <span> </span>
                  {ingredient.name}
                  <span> </span>
                  <Link to={`/ingredients/${ingredient._id}/edit`}>
                    <FontAwesomeIcon icon={faPencilAlt} />
                  </Link>
                  <span> </span>
                  <FontAwesomeIcon
                    icon={faBan}
                    color="#721c24"
                    onClick={() => {
                      this.deleteIngredient(ingredient._id);
                    }}
                  />
                </p>
              </div>
            ))}
          </div>
          <div className="col s12">
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
