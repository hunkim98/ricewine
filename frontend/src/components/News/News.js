import React from "react";
import "./News.css";

function News() {
  return (
    <div className="news_contents">
      <div className="title" id="news_page_title">News</div>

      <div className="news_year">
        <span className="year">2021</span>
        <div className="news_more">
            <div className="news_detail">
              <span className="news_date"> 06.02. </span>
              <div className="news_description">
                <div className="news_media">
                  <a href="https://biz.chosun.com/site/data/html_dir/2020/08/07/2020080701728.html">무슨일보</a>
                </div>
                <div className="news_title"> 무슨무슨 기사제목... 어떻다고 한다... 그렇다 "충격" </div>
              </div>
            </div>

            <div className="news_detail">
              <span className="news_date"> 06.02. </span>
              <div className="news_description">
                <div className="news_media">
                  <a href="https://biz.chosun.com/site/data/html_dir/2020/08/07/2020080701728.html">무슨일보</a>
                </div>
                <div className="news_title"> 무슨무슨 기사제목... 어떻다고 한다... 그렇다 "충격" </div>
              </div>
            </div>
        </div>
      </div>

      <div className="news_year">
        <span className="year">2021</span>
        <div className="news_more">
            <div className="news_detail">
              <span className="news_date"> 06.02. </span>
              <div className="news_description">
                <div className="news_media">
                  <a href="https://biz.chosun.com/site/data/html_dir/2020/08/07/2020080701728.html">무슨일보</a>
                </div>
                <div className="news_title"> 무슨무슨 기사제목... 어떻다고 한다... 그렇다 "충격" </div>
              </div>
            </div>

            <div className="news_detail">
              <span className="news_date"> 06.02. </span>
              <div className="news_description">
                <div className="news_media">
                  <a href="https://biz.chosun.com/site/data/html_dir/2020/08/07/2020080701728.html">무슨일보</a>
                </div>
                <div className="news_title"> 무슨무슨 기사제목... 어떻다고 한다... 그렇다 "충격" </div>
              </div>
            </div>
        </div>
      </div>

    </div>
  )
}

export default News;
