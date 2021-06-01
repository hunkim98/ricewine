import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { BrowserRouter, useLocation, Switch, Route } from "react-router-dom";
import Stores from "./Stores/Stores";
import Map from "./Stores/Map";
import About from "./About/About";
import Navigation from "./Navigation/Navigation";
import Navigation_mobile from "./Navigation/Navigation_mobile";
import Navigation_mobile_logo from "./Navigation/Navigation_mobile_logo";
import Contact from "./Contact/Contact";
import News from "./News/News";
import "./App.css";
function App() {
  const [clickMap, setClickMap] = useState(false);
  const [address, setAddress] = useState([0, 0]);
  const [addressInfo, setAddressInfo] = useState("");
  const [addressName, setAddressName] = useState("");
  const [button, setButton] = useState(true);
  useEffect(() => {
    showButton();
  }, []);
  const showButton = () => {
    //언제 모바일 navigation bar가 나올지는 window.innerWidth 범위로 조정(단위:px)
    if (window.innerWidth <= 668) {
      setButton(true);
    } else {
      setButton(false);
    }
  };
  window.addEventListener("resize", showButton);
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
        {button ? <Navigation_mobile /> : <Navigation />}
        {/* Navigation_mobile_logo를 따로 만든 이유는, mobile menu bar의 position이 absolute이기 때문 */}
        {button ? <Navigation_mobile_logo /> : null}
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
