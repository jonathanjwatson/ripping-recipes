import React, { useContext } from "react";
import PuffLoader from "react-spinners/PuffLoader";
import StatusContext from "../../utils/StatusContext";

const IngredientForm = (props) => {
  const status = useContext(StatusContext);

  return (
    <form className="col s12" onSubmit={props.handleSubmit}>
      <div className="row">
        <div className="input-field col s8">
          <input
            id="name"
            type="text"
            name="name"
            value={props.name}
            onChange={(e) => {
              props.setName(e.target.value);
            }}
          />
          <label htmlFor="name">Ingredient Name</label>
        </div>
        <div className="input-field col s4">
          <label>
            <input
              type="checkbox"
              name="isVegetarian"
              checked={props.isVegetarian}
              onChange={(e) => {
                props.setIsVegetarian(e.target.checked);
              }}
            />
            <span>Is Vegetarian?</span>
          </label>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <button
            className="btn waves-effect waves-light"
            type="submit"
            style={{ marginTop: -50, marginRight: 10 }}
            disabled={status.isLoading}
          >
            Create
          </button>

          <div style={{ display: "inline-block" }}>
            <PuffLoader color="#26a69a" loading={status.isLoading} />
          </div>
        </div>
      </div>
    </form>
  );
};

export default IngredientForm;
