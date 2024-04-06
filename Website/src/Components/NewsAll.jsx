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
          className="text-center mb-5"
          style={{
            paddingTop: "15px",
            paddingBottom: "15px",
            backgroundColor: "#4753AB",
            color:"white",
            fontSize: "2rem",
            fontFamily: "Poppins"
          }}
        >
          Latest <span className="bg-[#71bef1] p-2 rounded-xl text-black">News</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
      </div>
    </>
  );
};

export default NewsAll;
