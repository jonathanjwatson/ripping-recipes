import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import IngredientForm from "../../components/IngredientForm/IngredientForm";
import StatusContext from "../../utils/StatusContext";
import UserContext from "../../utils/UserContext";

const NewIngredient = (props) => {
  const [name, setName] = useState("");
  const [isVegetarian, setIsVegetarian] = useState(false);

  const status = useContext(StatusContext);

  const user = useContext(UserContext);

  useEffect(() => {
    return () => {
      status.dispatch({
        type: "SET_MESSAGE",
        message: "",
        messageType: "success",
      });
    };
  }, []);

  const handleSubmit = (e) => {
    let config = {
      headers: {
        auth: user.jwt,
      },
    };
    e.preventDefault();
    status.dispatch({ type: "TOGGLE_IS_LOADING" });
    axios
      .post("/api/ingredients", { name, isVegetarian }, config)
      .then((response) => {
        console.log(response.data);
        // status.setIsLoading(false);
        status.dispatch({ type: "TOGGLE_IS_LOADING" });
        status.dispatch({
          type: "SET_MESSAGE",
          message: response.data.message,
          messageType: "success",
        });
        // window.alert(response.data.message);
        setTimeout(() => {
          props.history.push("/ingredients");
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
        status.dispatch({ type: "TOGGLE_IS_LOADING" });
        status.dispatch({
          type: "SET_MESSAGE",
          message: "Failed to create new ingredient",
          messageType: "error",
        });
      });
  };

  return (
    <div className="container">
      <div className="row">
        <IngredientForm
          handleSubmit={handleSubmit}
          setName={setName}
          setIsVegetarian={setIsVegetarian}
          name={name}
          isVegetarian={isVegetarian}
        >
          <button
            className="btn waves-effect waves-light"
            type="submit"
            style={{ marginTop: -50, marginRight: 10 }}
            disabled={status.isLoading}
          >
            Create
          </button>
        </IngredientForm>
      </div>
    </div>
  );
};

export default NewIngredient;
