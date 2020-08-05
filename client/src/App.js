import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import NoMatch from "./containers/NoMatch/NoMatch";
import Ingredients from "./containers/Ingredients/Ingredients";
import NewIngredient from "./containers/NewIngredient/NewIngredient";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/ingredients" component={Ingredients} />
        <Route exact path="/ingredients/new" component={NewIngredient} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
