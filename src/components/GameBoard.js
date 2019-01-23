import React from "react";
import Card from "./Card";
// import { Image } from 'react-bootstrap';
import { Image, Grid, Row, Col } from 'react-bootstrap';
import "./images.css";


// If we want a child component to update or pass data to its parent, we can create a method inside the parent for the update
// Then bind the method to the parent, and pass it to the child as a prop


const GameBoard = props => (

<Grid>
  <Row>

  {props.cards.map(card=> (
    <Col xs={6} md={3} className="text-center">
      <Card handleClicks={props.handleClicks} image={card.link} id={card.id} />
    </Col>
    )
  )}
  </Row>
  
  
  
</Grid>



  
);
 /* {<Row>
    <Col xs={6} md={3} className="text-center">
      <Image className="card" src={props.cards[i]} thumbnail />
    </Col>
    <Col xs={6} md={3} className="text-center">
    <Image className="card" src={props.cards[0]} thumbnail />
    </Col>
    <Col xs={6} md={3} className="text-center">
    <Image className="card" src={props.cards[0]} thumbnail />
    </Col>
    <Col xs={6} md={3} className="text-center">
    <Image className="card" src={props.cards[0]} thumbnail />
    </Col>
    <Col xs={6} md={3} className="text-center">
    <Image className="card" src={props.cards[0]} thumbnail />
    </Col>
    <Col xs={6} md={3} className="text-center">
    <Image className="card" src={props.cards[0]} thumbnail />
    </Col>
    <Col xs={6} md={3} className="text-center">
    <Image className="card" src={props.cards[0]} thumbnail />
    </Col>
    <Col xs={6} md={3} className="text-center">
    <Image className="card" src={props.cards[0]} thumbnail />
    </Col>
    <Col xs={6} md={3} className="text-center">
    <Image className="card" src={props.cards[0]} thumbnail />
    </Col>
    <Col xs={6} md={3} className="text-center">
    <Image className="card" src={props.cards[0]} thumbnail />
    </Col>
    <Col xs={6} md={3} className="text-center">
    <Image className="card" src={props.cards[0]} thumbnail />
    </Col>
    <Col xs={6} md={3} className="text-center">
    <Image className="card" src={props.cards[0]} thumbnail />
    </Col>
  </Row>} */

export default GameBoard;
