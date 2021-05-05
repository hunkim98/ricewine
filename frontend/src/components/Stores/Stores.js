import React, { useEffect, useState } from "react";
import "./Stores.css";

function Stores() {
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
    <div>
      <ul>
        {storeList.length == 0
          ? null
          : storeList.stores.map((item) => {
              return (
                <div className="item">
                  <li key={item.id}>{item.name}</li>
                  {item.items.map((item_image) => {
                    return (
                      <div className="item_image">
                        <img src={item_image.mainImage} alt="ricewine" />
                        <div className="item_name">{item_image.itemName}</div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
      </ul>
    </div>
  );
}

export default Stores;
