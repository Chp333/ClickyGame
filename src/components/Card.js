import React from "react";
import { Image } from 'react-bootstrap';

// If we want a child component to update or pass data to its parent, we can create a method inside the parent for the update
// Then bind the method to the parent, and pass it to the child as a prop

const Card = props => (
 
    <Image className="card" thumbnail onClick={() => props.handleClicks(props.id)} src={props.image}/>


    

 
);

export default Card;



