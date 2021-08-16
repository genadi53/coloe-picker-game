import React, { useState, useEffect, useReducer } from "react";
import { generateRandomColors, random } from "./utils/generateColors";
import {
  GameStateReducer,
  initialState,
  ActionTypes,
} from "./utils/gameStateReducer";
import { GameStateContext } from "./utils/Context";

import Header from "./components/header";

import "./App.css";
import Square from "./components/square";

const App = () => {
  const [reducer, dispatch] = useReducer(GameStateReducer, initialState);
  const [colors, setColors] = useState([]);
  const [selectedColor, setSelectedColor] = useState("");
  const [trigger, setTrigger] = useState(false);

  const setUpGame = () => {
    const colorsArray = generateRandomColors(reducer.numberOfSquares);
    setColors(colorsArray);
    const color = colorsArray[random(colorsArray.length)];
    setSelectedColor(color);
    dispatch({ type: ActionTypes.GAME_START });
    dispatch({ type: ActionTypes.SET_SELECTED_COLOR, payload: color });
  };

  useEffect(() => {
    setUpGame();
    setTrigger(false);
  }, [trigger]);

  return (
    <div className="App">
      <GameStateContext.Provider value={{ reducer, dispatch }}>
        <Header trigger={setTrigger}></Header>
        <div className="container">
          {colors.map((color) => {
            return <Square key={color} color={color}></Square>;
          })}
        </div>
      </GameStateContext.Provider>
    </div>
  );
};

export default App;
