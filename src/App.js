import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Bar from "./components/Bar";
import Box from "./components/Box";
import sixGetRandomRgb from "./utils/randomColorFunc";

function App() {
  const [boxes, updateBoxes] = useState(6);
  const [colors, updateColors] = useState(sixGetRandomRgb());
  const [clickedBox, updateClickedBox] = useState(null);
  const correctColor = colors[0];
  return (
    <div className="App">
      <Header color={correctColor} />
      <Bar
        color={correctColor}
        randomColorFunc={updateColors}
        boxColor={updateBoxes}
        clickedBox={clickedBox}
      />
      <div className="flex">
        {Array.from({ length: boxes }).map((_, i) => (
          <Box
            key={i}
            updateClickedBox={updateClickedBox}
            background={colors[i]}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
