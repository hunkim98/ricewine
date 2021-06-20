import React from "react";
import "./Footer.css";

function Footer({ myLocation }) {
  return (
    <div className="footer_container">
      <div className="footer_invisible"></div>
      <div className="footer_visible">
        <div className="footer_content">
          <hr width="100%" color="black" />
          <div className="footer_information">
            <div className="left_information">
              <span>회사명: C막걸리</span>
              <br />
              <span>대표자: 최영은</span>
              <br />
              <span>{"주소:" + myLocation.address}</span>
              <br />
              <span>사업자등록번호: XXX</span>
              <br />
              <span>{"전화: " + myLocation.contact}</span>
              <br />
            </div>
            <div className="right_information">
              <div className="upper_footer_information">
                <span>Contemporary Makgeoli Brewery</span>
                <br />
                <span>Orignally From Seoul</span>
                <br />
                <span>Established 2020.</span>
                <br />
                <br />
                <span>COPYRIGHT 2021.</span>
                <br />
                <span>Cmakgeoli. All Rights Reserverd</span>
                <br />
                <span>Instagram @cmakgeolli</span>
                <br />
                <br />
              </div>
              <div className="lower_footer_information">
                <span>Website Created by SNU VD Design</span>
                <br />
                <span>Kim Dong-hun, @oz.tinman</span>
                <br />
                <span>Jeong Ga-eun, @cata_dioptric</span>
                <br />
                <span>Jun Yoon-chang, @ohyoonc</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
