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
      "   <h3>C막걸리 양조장</h3>",
      "   <p>2층에 위치해 있습니다!</p>",
      "</div>",
    ].join("");

    var infowindow = new naver.maps.InfoWindow({
      content: contentString,
    });

    infowindow.open(map, marker);
  }, []);
  return <div className="map" id="map"></div>;
}

export default ContactMap;
