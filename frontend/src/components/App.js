import React from "react";
import { render } from "react-dom";
import { BrowserRouter, useLocation, Switch, Route } from "react-router-dom";
import Stores from "./Stores/Stores";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" render={(props) => <Stores />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

const container = document.getElementById("app");
render(<App />, container);
