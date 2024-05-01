import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CreateACard = ({ imageUrl, title, content, url }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{content}</Card.Text>
          <Button href={url} target="_blank" variant="primary">
            Go somewhere
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CreateACard;
