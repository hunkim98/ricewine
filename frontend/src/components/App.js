import React, { useState } from "react";
import { render } from "react-dom";
import { BrowserRouter, useLocation, Switch, Route } from "react-router-dom";
import Stores from "./Stores/Stores";
import Map from "./Stores/Map";

function App() {
  const [clickMap, setClickMap] = useState(false);
  const [address, setAddress] = useState([0, 0]);
  const [addressInfo, setAddressInfo] = useState("");
  const [addressName, setAddressName] = useState("");
  return (
    <BrowserRouter>
      {clickMap ? (
        <Map
          setClickMap={setClickMap}
          address={address}
          addressName={addressName}
          addressInfo={addressInfo}
        />
      ) : null}
      <Switch>
        <Route
          path="/"
          render={(props) => (
            <Stores
              {...props}
              setClickMap={setClickMap}
              setAddress={setAddress}
              setAddressName={setAddressName}
              setAddressInfo={setAddressInfo}
            />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

const container = document.getElementById("app");
render(<App />, container);
