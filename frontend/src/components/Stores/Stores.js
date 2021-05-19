import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Stores.css";

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"; //this is needed for 'POST' connection with django server
axios.defaults.xsrfCookieName = "csrftoken"; //this is needed for 'POST' connection with django server

function Stores({ setClickMap, setAddress, setAddressName, setAddressInfo }) {
  const [storeList, setStoreList] = useState([]);

  useEffect(() => {
    fetch("api/stores")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setStoreList({ stores: data });
      });
  }, []);

  return (
    <div className="contents">
      {storeList.length == 0
        ? null
        : storeList.stores.map((item) => {
            return (
              <div
                className="store"
                onClick={() => {
                  setAddress([item.latitude, item.longditude]);
                  setAddressName(item.name);
                  setAddressInfo(item.description);
                  setClickMap(true);
                }}
              >
                <div className="store_blank">
                  <div className="store_name">{item.name}</div>
                  <div className="store_ad">{item.location}</div>
                </div>
                <span className="lineup">
                  {item.items.map((item_image) => {
                    return (
                      <div
                        className="lineup_item"
                        style={{
                          backgroundImage: `url(${item_image.mainImage})`,
                        }}
                      >
                        {item_image.itemName}
                      </div>
                      // <div className="item_image">
                      //   <img src={item_image.mainImage} alt="ricewine" />
                      //   <div className="item_name">{item_image.itemName}</div>
                      // </div>
                    );
                  })}
                </span>
              </div>
            );
          })}
    </div>
  );
}

export default Stores;
