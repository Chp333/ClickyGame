import React from "react";
import "../styles/Header.css";


// By importing the Header.css file, it is added to the DOM whenever this component loads

const Header = (props) => (
  <header className="header">
    <h1>Game Of Thrones</h1>
    <h1>I drink and I know things challenge!!!</h1>
    <h1>Try to click through all 12 images without clicking the same image twice</h1>
    {props.children} 
  </header>
);

export default Header;
