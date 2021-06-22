import React, { useEffect, useState } from "react";
import "./News.css";

function News() {
  const [newsList, setNewsList] = useState([]);
  const [newsCategory, setNewsCategory] = useState([]);
  useEffect(() => {
    fetch("api/news")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setNewsList({ articles: data });
      });
  }, []);
  useEffect(() => {
    if (newsList.length !== 0) {
      let yearArray = [];
      newsList.articles.map((item) => {
        let dateData = new Date(item.date);
        let dateYear = dateData.getFullYear();
        if (!yearArray.includes(dateYear)) {
          console.log("added year " + dateYear);
          //if the yearArray(temporary array) of a specific year does not exist..
          yearArray.push(dateYear);
        }
      });
      setNewsCategory(yearArray);
    }
  }, [newsList]);
  return (
    <div className="news_contents">
      <div className="title" id="news_page_title">
        News
      </div>
      {newsCategory.length === 0
        ? null
        : newsCategory.map((year) => {
            return (
              <div className="news_year">
                <span className="year">{year}</span>
                <div className="news_more">
                  {newsList.articles.map((item) => {
                    let articleDate = new Date(item.date);
                    let articleYear = articleDate.getFullYear();
                    if (articleYear === year) {
                      return (
                        <div className="news_detail">
                          <span className="news_date">
                            {articleDate.getMonth() + 1} / {" "}
                            {articleDate.getUTCDate()}
                          </span>
                          <div className="news_description">
                            <div className="news_media">
                              <a href={item.url}>{item.source}</a>
                            </div>
                            <div className="news_title">{item.title}</div>
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            );
          })}
    </div>
  );
}

export default News;
