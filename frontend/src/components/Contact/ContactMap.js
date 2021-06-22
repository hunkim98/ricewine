import React, { useEffect } from "react";
import black_square from "../images/black_square.png"

function ContactMap({ description, latitude, longditude, name }) {
  useEffect(() => {
    var map = new naver.maps.Map("map", {
      center: new naver.maps.LatLng(longditude, latitude),
      zoom: 17,
    });
    var marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(longditude, latitude),
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
      '   <div class="address_title">' + name + "</div>",
      '   <div class="address_info">' + description + "</div>",
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
