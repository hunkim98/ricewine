import React from "react";
import "./Contact.css";
import facebook from "../images/facebook-square-brands.svg";
import instagram from "../images/instagram-square-brands.svg";

function Contact() {
  return (
    <div className="contact">
    	<span className="title">Contact</span>
        <a href="https://www.facebook.com/cmakgeolli"><img src={facebook} /> </a>
		<a href="https://www.instagram.com/cmakgeolli"><img src={instagram} /> </a>
        <div className="contact_text">양조장 위치</div>
		<span className="contact_text2">서울 강남구 논현로 18, 2층</span>
        <span className="map"></span>
    </div>
  );
}

export default Contact;
