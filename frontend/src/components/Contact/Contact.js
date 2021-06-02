import React from "react";
import "./Contact.css";
import facebook from "../images/facebook-square-brands.svg";
import instagram from "../images/instagram-square-brands.svg";
import ContactMap from "./ContactMap";

function Contact() {
  return (
    <div className="contact">
      <div className="title" id="contact_title">Contact</div>
      <div className="contact_after_t">
          <div className="contact_more">
              <div className="contact_text">양조장 위치</div>
              <div className="contact_text2">서울 강남구 논현로 18, 2층</div>
              <br/>
              <div className="contact_text">양조장 연락처</div>
              <div className="contact_text2">010-xxxx-xxxx</div>
              <br/>
              <div className="contact_icons">
                  <a href="https://www.facebook.com/cmakgeolli">
                    <img src={facebook} />{" "}
                  </a>
                  <a href="https://www.instagram.com/cmakgeolli">
                    <img src={instagram} />{" "}
                  </a>
              </div>
          </div>
          <ContactMap></ContactMap>
          {/* ContactMap.js 안에 className="map" 존재 */}
      </div>
    </div>
  );
}

export default Contact;
