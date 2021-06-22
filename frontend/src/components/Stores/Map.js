import React, { useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import black_square from "../images/black_square.png"
import "./Map.css";

function Map({ setClickMap, address, addressName, addressInfo, addressWord }) {
  useEffect(() => {
    console.log(address[0]);
    var map = new naver.maps.Map("map", {
      center: new naver.maps.LatLng(address[1], address[0]),
      zoom: 17,
    });
    var marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(address[1], address[0]),
      map: map,
       icon: {
         url: black_square,
         size: new naver.maps.Size(12, 12),
         origin: new naver.maps.Point(0, 0),
         anchor: new naver.maps.Point(6, 6)
      }
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
          <div className="upper_content">
            <div className="popup_title">위치</div>
            <div className="close" onClick={() => setClickMap(false)}>
              닫기
            </div>
          </div>
          <div className="below_content">
            <div className="copy_guide">상세 주소</div>
            <CopyToClipboard
              text={addressWord}
              onCopy={() => {
                alert("주소가 복사되었습니다");
              }}
            >
              <div className="copy_address">{addressWord}</div>
            </CopyToClipboard>
          </div>
        </div>
        <div id="map"></div>
      </div>
    </div>
  );
}

export default Map;
