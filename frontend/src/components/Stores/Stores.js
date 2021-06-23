import React, { useEffect, useState } from "react";

import "./Stores.css";
import StoreType from "./StoreType";

function Stores({
  setClickMap,
  setAddress,
  setAddressName,
  setAddressInfo,
  setAddressWord,
}) {
  const [storeList, setStoreList] = useState([]);
  const [pubList, setPubList] = useState([]);
  const [shopClick, setShopClick] = useState(0);
  const [shopPub, setShopPub] = useState([]);
  let shopPubTemp = [0, 0];

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

  useEffect(() => {
    fetch("api/pubs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPubList({ pubs: data });
      });
  }, []);

  useEffect(() => {
    shopPubTemp[0] = storeList.stores;
    shopPubTemp[1] = pubList.pubs;
    if (shopPubTemp[0] !== undefined && shopPubTemp[1] !== undefined) {
      console.log("shopPub initialized");
      setShopPub(shopPubTemp);
      console.log(shopPubTemp);
    }
  }, [pubList, storeList]);

  return (
    <div className="contents">
      <div className="title" id="store_title">
        Store
      </div>
      <div id="store_paragraph">
        매장마다 재고상황이 상이할 수 있으므로 방문하시고자 하는 가게에 재고가
        있는지 미리 문의해보시기를 부탁드립니다!
      </div>
      <hr size="2px" width="100%" color="black" />
      <StoreType shopClick={shopClick} setShopClick={setShopClick} />
      <div className="store_list">
        {shopPub[0] == undefined && shopPub[1] == undefined
          ? null
          : shopPub[shopClick].map((item) => {
              if (item.visible) {
                return (
                  <div
                    className="store"
                    onClick={() => {
                      setAddress([item.latitude, item.longditude]);
                      setAddressName(item.name);
                      setAddressInfo(item.description);
                      setAddressWord(item.address);
                      setClickMap(true);
                    }}
                  >
                    <div className="store_short_location">
                      {item.location.substr(0, item.location.indexOf(" "))}
                    </div>
                    <div className="store_more">
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
                                backgroundImage: `url(${item_image.img_url})`,
                              }}
                            >
                              {item_image.itemName}
                            </div>
                          );
                        })}
                      </span>
                    </div>
                  </div>
                );
              }
            })}
      </div>
    </div>
  );
}

export default Stores;
