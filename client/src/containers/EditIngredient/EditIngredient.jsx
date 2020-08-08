import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import IngredientForm from "../../components/IngredientForm/IngredientForm";
import StatusContext from "../../utils/StatusContext";

const EditIngredient = (props) => {
  const [name, setName] = useState("");
  const [isVegetarian, setIsVegetarian] = useState(false);

  const status = useContext(StatusContext);

  const { id } = useParams();

  const nameInputRef = useRef();

  useEffect(() => {
    axios
      .get(`/api/ingredients/${id}`)
      .then((response) => {
        console.log(response.data);
        setName(response.data.data.name);
        setIsVegetarian(response.data.data.isVegetarian);
      })
      .catch((err) => {
        console.log(err);
      });
    nameInputRef.current.focus();

    return () => {
      status.dispatch({
        type: "SET_MESSAGE",
        message: "",
        messageType: "success",
      });
    };
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    status.dispatch({ type: "TOGGLE_IS_LOADING" });
    axios
      .put(`/api/ingredients/${id}`, { name, isVegetarian })
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
          nameInputRef={nameInputRef}
        >
          <button
            className="btn waves-effect waves-light"
            type="submit"
            style={{ marginTop: -50, marginRight: 10 }}
            disabled={status.isLoading}
          >
            Update
          </button>
        </IngredientForm>
      </div>
    </div>
  );
};

export default EditIngredient;
