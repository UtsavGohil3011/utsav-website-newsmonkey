// NewsCard.js
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// Default image URL
const defaultImageUrl = "https://picsum.photos/id/237/2000/2000";

const NewsCard = ({ imageUrl, title, content, url }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          className="w-100 h-25"
          variant="top"
          src={imageUrl || defaultImageUrl} // Use default image if imageUrl is null
        />
        <Card.Body>
          <Card.Title>{title?.slice(0, 40)}...</Card.Title>
          <Card.Text>{content?.slice(0, 80)}...</Card.Text>
          <Button href={url} target="_blank" variant="primary">
            Read More
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NewsCard;
