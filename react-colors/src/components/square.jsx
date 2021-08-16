import React, { useContext, useRef, useEffect } from "react";
import { GameStateContext } from "../utils/Context";
import { ActionTypes } from "../utils/gameStateReducer";

const Square = ({ color }) => {
  const { reducer, dispatch } = useContext(GameStateContext);
  const squareRef = useRef(null);
  const squareColor = reducer.isFinished ? reducer.selectedColor : color;

  useEffect(() => {
    if (squareRef.current.style) {
      squareRef.current.style.backgroundColor = squareColor;
    }
  }, [reducer.isFinished]);

  return (
    <div
      className="square"
      style={{
        backgroundColor: color,
      }}
      ref={squareRef}
      onClick={() => {
        // console.log("select: " + reducer.selectedColor);
        // console.log("curr: " + color);
        if (reducer.selectedColor === color) {
          dispatch({
            type: ActionTypes.GAME_END,
            payload: true,
          });
        } else {
          // console.log(squareRef.current);
          if (reducer.isFinished) return;
          squareRef.current.style.backgroundColor = "#232323";
        }
      }}
    ></div>
  );
};
export default Square;
