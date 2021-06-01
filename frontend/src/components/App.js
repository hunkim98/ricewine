import React, { useState } from "react";
import { render } from "react-dom";
import { BrowserRouter, useLocation, Switch, Route } from "react-router-dom";
import Stores from "./Stores/Stores";
import Map from "./Stores/Map";
import About from "./About/About";
import Navigation from "./Navigation/Navigation";
import Contact from "./Contact/Contact";
import News from "./News/News";
import "./App.css";
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
      <div className="app_flex_control">
        <Navigation />
        <Switch>
          <Route
            path="/"
            exact
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
          <Route path="/about" render={(props) => <About {...props} />} />
          <Route path="/contact" render={(props) => <Contact {...props} />} />
          <Route path="/news" render={(props) => <News {...props} />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

const container = document.getElementById("app");
render(<App />, container);
