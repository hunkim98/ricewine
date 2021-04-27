import React, { useEffect, useState } from "react";

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
              return <li key={item.id}>{item.name}</li>;
            })}
      </ul>
    </div>
  );
}

export default Stores;
