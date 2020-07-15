import React from "react";

function Box(props) {
  return (
    <div
      onClick={() => props.updateClickedBox(props.background)}
      className="box"
      style={{ background: props.background }}
    ></div>
  );
}

export default Box;