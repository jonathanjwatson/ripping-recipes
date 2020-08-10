import React, { useReducer } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import NoMatch from "./containers/NoMatch/NoMatch";
import Ingredients from "./containers/Ingredients/Ingredients";
import NewIngredient from "./containers/NewIngredient/NewIngredient";
import Recipes from "./containers/Recipes/Recipes";
import NewRecipe from "./containers/NewRecipe/NewRecipe";
import StatusContext from "./utils/StatusContext";
import Toast from "./components/Toast/Toast";
import EditIngredient from "./containers/EditIngredient/EditIngredient";
import Nav from "./components/Nav/Nav";
import "./App.css";
import FindRecipe from "./containers/FindRecipe/FindRecipe";

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_IS_LOADING":
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    case "SET_MESSAGE":
      return {
        ...state,
        message: action.message,
        messageType: action.messageType,
      };
    default:
  }
}

function App() {
  //   const [isLoading, setIsLoading] = useState(false);
  const [{ isLoading, message, messageType }, dispatch] = useReducer(reducer, {
    isLoading: false,
    message: "",
    messageType: "success",
  });
  return (
    <Router>
      <StatusContext.Provider
        value={{ isLoading, message, messageType, dispatch }}
      >
        <Nav />
        <Toast />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/ingredients" component={Ingredients} />
          <Route exact path="/ingredients/new" component={NewIngredient} />
          <Route
            exact
            path="/ingredients/:id/edit"
            component={EditIngredient}
          />
          <Route exact path="/recipes" component={Recipes} />
          <Route exact path="/recipes/new" component={NewRecipe} />
          <Route exact path="/recipes/find" component={FindRecipe} />
          <Route component={NoMatch} />
        </Switch>
      </StatusContext.Provider>
    </Router>
  );
}

export default App;
