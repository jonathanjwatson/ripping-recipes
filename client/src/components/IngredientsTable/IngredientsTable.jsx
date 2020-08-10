import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faLeaf, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const IngredientsTable = ({ ingredients, selectable, handleCheckboxChange }) => {
  return (
    <table>
      <thead>
        <tr>
          {selectable && <th>Add to Recipe</th>}
          <th>Name</th>
          <th>Is Vegetarian?</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>

      <tbody>
        {ingredients.map((ingredient) => (
          <tr key={ingredient._id}>
            {selectable && (
              <td>
                <label>
                  <input
                    type="checkbox"
                    name="isChecked"
                    checked={ingredient.isChecked}
                    onChange={() => {
                      handleCheckboxChange(ingredient._id);
                    }}
                  />
                  <span></span>
                </label>
              </td>
            )}
            <td>{ingredient.name}</td>
            <td>
              {ingredient.isVegetarian && (
                <FontAwesomeIcon icon={faLeaf} color="#26a69a" />
              )}
            </td>
            <td>
              <Link to={`/ingredients/${ingredient._id}/edit`}>
                <FontAwesomeIcon icon={faPencilAlt} />
              </Link>
            </td>
            <td>
              {" "}
              <FontAwesomeIcon
                icon={faBan}
                color="#721c24"
                onClick={() => {
                  this.deleteIngredient(ingredient._id);
                }}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default IngredientsTable;
