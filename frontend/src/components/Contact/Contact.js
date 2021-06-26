import React, { useEffect, useState } from "react";
import "./Contact.css";
import facebook from "../images/facebook-brands.svg";
import instagram from "../images/instagram-brands.svg";
import ContactMap from "./ContactMap";

function Contact({ myLocation }) {
  return (
    <div className="contact">
      <div className="title" id="contact_title">
        Contact
      </div>
      {myLocation.length !== 0 ? (
        <div className="contact_after_t">
          <div className="contact_more">
            <div className="contact_texts">
              <div className="contact_text">양조장 위치</div>
              <div className="contact_text2">{myLocation.address}</div>
              <br />
              <div className="contact_text">양조장 연락처</div>
              <div className="contact_text2">{myLocation.contact}</div>
              <br />
            </div>
            <div className="contact_icons">
              <a href="https://www.facebook.com/cmakgeolli">
                <img src={facebook} />{" "}
              </a>
              <a href="https://www.instagram.com/cmakgeolli">
                <img src={instagram} />{" "}
              </a>
            </div>
          </div>
          <ContactMap
            description={myLocation.description}
            latitude={myLocation.latitude}
            longditude={myLocation.longditude}
            name={myLocation.name}
          ></ContactMap>
          {/* ContactMap.js 안에 className="map" 존재 */}
        </div>
      ) : null}
    </div>
  );
}

export default Contact;
