import React, { useEffect } from "react";
import "./Map.css";

function Map({ setClickMap, address, addressName, addressInfo }) {
  useEffect(() => {
    console.log(address[0]);
    var map = new naver.maps.Map("map", {
      center: new naver.maps.LatLng(address[1], address[0]),
      zoom: 17,
    });
    var marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(address[1], address[0]),
      map: map,
    });
    var contentString = [
      '<div class="iw_inner">',
      ' <div class="iw_content">',
      '   <div class="address_title">' + addressName + "</div>",
      '   <div class="address_info">' + addressInfo + "</div>",
      " </div>",
      ' <div class="address_point"></div>',
      "</div>",
    ].join("");

    var infowindow = new naver.maps.InfoWindow({
      content: contentString,
      borderWidth: 0,
      backgroundColor: "transparent",
      disableAnchor: true,
    });

    infowindow.open(map, marker);
  }, []);
  return (
    <div className="popup_container">
      <div className="content">
        <div className="upper_bar">
          <div className="title">위치</div>
          <div className="close" onClick={() => setClickMap(false)}>
            닫기
          </div>
        </div>
        <div id="map"></div>
      </div>
    </div>
  );
}

export default Map;
