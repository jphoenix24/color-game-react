import React from "react";

function Header(props) {
  return (
    <div className="header">
      <p>THE GREAT</p>
      <p>{props.color}</p>
      <p>COLOR GAME</p>
    </div>
  );
}

export default Header;