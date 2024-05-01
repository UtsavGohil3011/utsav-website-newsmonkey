import React, { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import Button from "react-bootstrap/Button";
import Spinner from "../spinner/Spiner";

const NewsContainer = () => {
  const [newsData, setNewsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true); // Initialize loading state to true
  const pageSize = 5;

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        setLoading(true); // Set loading state to true when fetching data
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=in&category=sports&page=${currentPage}&pageSize=${pageSize}&apiKey=f1e181b620bf4df5a10ef0f294ed3357`
        );
        const data = await response.json();
        setNewsData(data.articles);
        setTotalPages(Math.ceil(data.totalResults / pageSize));
      } catch (error) {
        console.error("Error fetching news data:", error);
      } finally {
        setLoading(false); // Set loading state to false when data fetching is complete
      }
    };

    fetchNewsData();
  }, [currentPage, pageSize]);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      {loading && <Spinner />} {/* Render spinner if loading is true */}
      <div className="container d-flex flex-wrap justify-content-around">
        {newsData.map((article, index) => (
          <NewsCard
            key={index}
            imageUrl={article.urlToImage}
            title={article.title}
            content={article.description}
            url={article.url}
          />
        ))}
      </div>
      <div className="container d-flex justify-content-between">
        <Button variant="dark" onClick={prevPage} disabled={currentPage === 1}>
          &larr; Previous
        </Button>
        {currentPage !== totalPages && (
          <Button variant="dark" onClick={nextPage}>
            Next &rarr;
          </Button>
        )}
      </div>
    </>
  );
};

export default NewsContainer;
