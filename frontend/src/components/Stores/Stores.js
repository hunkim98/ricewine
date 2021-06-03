import React, { useEffect, useState } from "react";

import "./Stores.css";

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
      <div className="title">Store</div>
      <div id="store_paragraph">
        매장마다 재고상황이 상이할 수 있으므로 방문하시고자 하는 가게에 재고가
        있는지 미리 문의해보시기를 부탁드립니다!
      </div>
      <hr size="2px" width="100%" color="black" />
      <div className="store_list">
        {storeList.length == 0
          ? null
          : storeList.stores.map((item) => {
              if (!item.hidden) {
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
