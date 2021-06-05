import React from "react";
import "./StoreType.css";

function StoreType({ setShopClick }) {
  return (
    <div className="shop_or_pub_container">
      <div className="shop_or_pub" onClick={() => setShopClick(0)}>
        <div className="shop_select">Shop</div>
      </div>
      <div className="shop_or_pub" onClick={() => setShopClick(1)}>
        <div className="pub_select">Pub</div>
      </div>
    </div>
  );
}

export default StoreType;
