import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Stores.css";

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"; //this is needed for 'POST' connection with django server
axios.defaults.xsrfCookieName = "csrftoken"; //this is needed for 'POST' connection with django server

function Stores() {
  const [storeList, setStoreList] = useState([]);
  const [address, setAddress] = useState("서울특별시 관악구 행운 2길 16");
  useEffect(() => {
    fetch("api/stores")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setStoreList({ stores: data });
      });
    var map = new naver.maps.Map("map", {
      center: new naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 10,
    });

    map.setCursor("pointer");
  }, []);

  const testClick = (text) => {
    axios({
      method: "GET",
      url: "getLocation/?id=" + text, //change this later
    }).then((res) => {
      console.log(res);
    });
    console.log("ouch");
  };

  const getLocation = (text) => {
    axios({
      method: "POST",
      url: "getLocation/",
      data: {
        address: text,
      },
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <button onClick={() => testClick(address)}>hi</button>
      <button onClick={() => setAddress("서울시 관악구 행운2길")}>hello</button>
      <button onClick={() => getLocation("서울시 관악구 행운2길")}>POST</button>
      <div className="show">show?</div>
      <div>
        {storeList.length == 0
          ? null
          : storeList.stores.map((item) => {
              return (
                <div
                  className="store_container"
                  onClick={() => getLocation(item.address)}
                >
                  <li key={item.id}>{item.name}</li>
                  <div className="item_group">
                    {item.items.map((item_image) => {
                      return (
                        <div className="item_name">{item_image.itemName}</div>
                        // <div className="item_image">
                        //   <img src={item_image.mainImage} alt="ricewine" />
                        //   <div className="item_name">{item_image.itemName}</div>
                        // </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
      </div>
      <div id="map"></div>
    </div>
  );
}

export default Stores;
