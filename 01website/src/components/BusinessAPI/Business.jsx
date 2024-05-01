import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Spinner from "../spinner/Spiner";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";

const Business = () => {
  const [newsData, setNewsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const pageSize = 5;
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f1e181b620bf4df5a10ef0f294ed3357&page=${currentPage}&pageSize=${pageSize}`
        );
        const data = await response.json();
        setNewsData(data.articles);
        setTotalPages(Math.ceil(data.totalResults / pageSize));
      } catch (error) {
        console.error("Error fetching news data:", error);
      } finally {
        setLoading(false);
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
      {loading && <Spinner />}
      <div className="container d-flex flex-wrap justify-content-around">
        {newsData.map((article, index) => (
          <div key={index}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={article.urlToImage} />
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.description}</Card.Text>
                <Button href={article.url} target="_blank" variant="primary">
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
          </div>
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
      <div className="d-flex  justify-content-center mt-5 mb-5  ">
        <Button variant="dark" onClick={handleShow}>
          Launch demo modal
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>GUA</Modal.Title>
          </Modal.Header>
          <Modal.Body>Hello!!!!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default Business;
