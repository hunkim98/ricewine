import React, { useEffect, useState } from "react";
import "./About.css";
import brewery from "../images/brewery.jpg";
import colorbar from "../images/colorbar.png";

function About() {
  const [storeItems, setStoreItems] = useState([]);

  useEffect(() => {
    fetch("api/storeItems")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setStoreItems({ storeItems: data });
      });
  }, []);
  return (
    <div className="about_contents">
      <div className="identity">
        <div className="title">C막걸리 Identity</div>
        <span className="paragraph">
          <p>
            　C막걸리는 전통과 현재가 공존하고 융합하는 우리 고유 양조문화, 특히
            막걸리 문화의 포스트모더니즘을 개척하고자 합니다. 명인의 손에서
            빚어나온 유서깊은 전통주, 농민의 땀과 정성이 담긴 지역특산주,
            효율적인 대량생산으로 만들어진 대중을 위한 막걸리, 현존하는 모든
            우리술을 존중합니다. 여기에 21세기형 신개념 막걸리 장르를 통해
            막걸리 문화의 다양성과 지속적인 발전을 추구합니다.
          </p>
        </span>
        <span className="identity_c">
          Creative
          <br />
          Colorful
          <br />
          Cosmopolitan
          <br />
          Classic Craft
          <br />
          Contemporary
        </span>
      </div>

      <hr size="2px" width="100%" color="black" />

      <div className="products">
        <div className="title2">Products</div>
        <div className="paragraph" id="p_products">
          <p>
            　우리쌀과 누룩, 다양한 천연 컬러푸드와 약재·허브를 조합하여
            창의적이고 기발한 맛, 색, 향을 담아낸 6가지 제품을 소개합니다.
            지속적인 연구 개발로 더욱 다양한 새로운 막걸리들과 문화 프로그램을
            선보일 예정입니다. <br />
            <br />
            <b>
              　*시그니처 큐베는 상시 생산, 이외의 컬러막걸리 시리즈는 월별,
              시즌별로 교차 출고됩니다. <br />
              <br />
            </b>
          </p>
        </div>
        <div className="ricewine_product_container">
          {storeItems.length == 0
            ? null
            : storeItems.storeItems.map((ricewine) => {
                return (
                  <div className="ricewine_product">
                    <div
                      className="ricewine_img"
                      style={{ backgroundImage: `url(${ricewine.mainImage})` }}
                    ></div>
                    <div className="ricewine_basic_info">
                      <div className="ricewine_name">{ricewine.itemName}</div>{" "}
                      <br />
                      <div className="ricewine_description">
                        {ricewine.description}
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>

        <span className="products_more">
          <span className="products_description" id="c_signature">
            <p>
              <b>C막걸리 시그니처큐베</b> <br />
              <br />
              　C막걸리의 시그니처 제품. 범벅으로 밑술을 고집하여 부드러운
              텍스처와 주니퍼베리, 건포도의 유쾌한 산미가 특징입니다.
            </p>
          </span>
          <span className="products_description" id="c_green">
            <p>
              <b>C 그린막걸리</b> <br />
              <br />
              　호불호의 끝판왕. 녹즙을 마시는 듯한 케일의 건강한 맛과 개똥쑥의
              강렬한 향의 조합이 특징입니다.
            </p>
          </span>
          <span className="products_description" id="c_yellow">
            <p>
              <b>C 옐로막걸리</b> <br />
              <br />
              　동남아 요리에 어울리는 막걸리. 당근의 담백함, 레몬그라스의
              이국적인 향기와 함께 전례 없는 페어링을 제안합니다.
            </p>
          </span>
          <span className="products_description" id="c_purple">
            <p>
              <b>C 퍼플막걸리</b> <br />
              <br />
              　우아하고 몽환적인 보랏빛 향기. 블루베리와 라벤더의 상큼함과
              편안함에 빠져들게 됩니다.
            </p>
          </span>
          <span className="products_description" id="c_red">
            <p>
              <b>C 레드막걸리</b> <br />
              <br />　 단 술이 싫은 진짜 주당을 위한 막걸리. 비트루트와
              꾸지뽕잎으로 빨강의 고정관념을 깨는 드라이한 반전을 선사합니다.
            </p>
          </span>
          <span className="products_description" id="c_brown">
            <p>
              <b>C 브라운막걸리</b> <br />
              <br />　 달콤쌉쌀한 다크초콜릿의 재해석. 카카오닙스와 진피를 넣어
              만든 진짜 천연 초콜릿 막걸리가 드디어 나왔습니다.
            </p>
          </span>
        </span>
      </div>

      <hr size="2px" width="100%" color="black" />

      <div className="brewery">
        <div className="title2">brewery</div>
        <span className="paragraph">
          <p>
            　서울 강남 최초의 도심 속 전용 양조장 C막걸리에서 다이나믹한 도시의
            소울과 에너지, 문화를 담은 막걸리를 빚습니다. 컬러풀하고 아늑한
            분위기의 막걸리 문화공간으로 꾸며졌으며, 매월 열리는 양조장
            오픈하우스에서 시음과 구매가 가능합니다. 견학 및 문화프로그램 개최
            공지는 인스타그램에서 확인하세요.
          </p>
        </span>
        <img src={brewery} />
      </div>
    </div>
  );
}

export default About;
