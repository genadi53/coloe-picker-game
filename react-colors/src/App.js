import React, { useState, useEffect } from "react";
import { generateRandomColors, random } from "./utils/generateColors";
import Header from "./components/header";

import "./App.css";
import Square from "./components/square";

const App = () => {
  const [colors, setColors] = useState([]);
  const [numSquares, setNumSquares] = useState(6);
  const [selectedColor, setSelectedColor] = useState("");

  useEffect(() => {
    setColors(generateRandomColors(numSquares));
    setSelectedColor(colors[random(colors.length)]);
  }, []);

  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        {colors.map((color) => {
          return <Square key={color} color={color}></Square>;
        })}
      </div>
    </div>
  );
};

export default App;
