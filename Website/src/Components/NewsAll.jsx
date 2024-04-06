import { useEffect } from "react";
import { useState } from "react";
import NewsItem from "./NewsItem";
import Navbar from "./Navbar";

// eslint-disable-next-line react/prop-types
const NewsAll = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=ie&category=health&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, []);
  return (
    <>
      <Navbar />
      <div>
        <h2
          className="text-center"
          style={{
            paddingTop: "80px",
            paddingBottom: "5px",
            backgroundColor: "beige",
          }}
        >
          Latest <span className="badge text-bg-info">News</span>
        </h2>
        {articles.map((news, index) => {
          return (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          );
        })}
      </div>
    </>
  );
};

export default NewsAll;
