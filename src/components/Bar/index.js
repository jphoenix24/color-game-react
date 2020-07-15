import React from "react";
import sixGetRandomRgb from "../../utils/randomColorFunc";

function Bar(props) {
  return (
    <div className="flex">
      <p onClick={() => props.randomColorFunc(sixGetRandomRgb())}>NEW COLORS</p>
      <p>{props.color === props.clickedBox ? "CORRECT" : "WRONG"}</p>
      <div className="flex level">
        <p onClick={() => props.boxColor(3)}>EASY</p>
        <p onClick={() => props.boxColor(6)}>HARD</p>
      </div>
    </div>
  );
}

export default Bar;