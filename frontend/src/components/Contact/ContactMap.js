import React, { useEffect } from "react";

const c_makgeoli_location = [37.473031, 127.0498825];

function ContactMap() {
  useEffect(() => {
    var map = new naver.maps.Map("map", {
      center: new naver.maps.LatLng(
        c_makgeoli_location[0],
        c_makgeoli_location[1]
      ),
      zoom: 17,
    });
    var marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(
        c_makgeoli_location[0],
        c_makgeoli_location[1]
      ),
      map: map,
    });
    var contentString = [
      '<div class="iw_inner">',
      ' <div class="iw_content">',
      '   <div class="address_title">C막걸리 양조장</div>',
      '   <div class="address_info">2층으로 오시면 됩니다</div>',
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
  return <div className="map" id="map"></div>;
}

export default ContactMap;
