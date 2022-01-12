import React from "react";
import { Card, CardGroup, Col, Row } from "react-bootstrap";
import img1 from './Images/img1.jpg'
import './style.css'

const Cards = () => {
  return (
    <div>
    <Row xs={1} md={6} className="g-4" >
  {Array.from({ length: 6 }).map((_, idx) => (
    <Col>
      <Card className="cc">
        <Card.Img  variant="top" src={img1} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
    </div>
  );
};

export default Cards;
