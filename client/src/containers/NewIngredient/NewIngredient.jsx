import React, { Component } from "react";
import axios from "axios";

class NewIngredient extends Component {
  state = {
    name: "",
    isVegetarian: false,
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    this.setState({
      [name]: checked,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/ingredients", this.state)
      .then((response) => {
        console.log(response.data);
        window.alert(response.data.message);
        this.props.history.push("/ingredients")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s8">
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleInputChange}
                />
                <label htmlFor="name">Ingredient Name</label>
              </div>
              <div className="input-field col s4">
                <label>
                  <input
                    type="checkbox"
                    name="isVegetarian"
                    checked={this.state.isVegetarian}
                    onChange={this.handleCheckboxChange}
                  />
                  <span>Is Vegetarian?</span>
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                <button className="btn waves-effect waves-light" type="submit">
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default NewIngredient;
