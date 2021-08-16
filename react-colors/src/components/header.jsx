import React, { useContext, useEffect } from "react";
import { GameStateContext } from "../utils/Context";
import { ActionTypes } from "../utils/gameStateReducer";

const Header = ({ trigger }) => {
  const { reducer, dispatch } = useContext(GameStateContext);
  const titleColor = reducer.isFinished ? reducer.selectedColor : "steelblue";

  useEffect(() => {}, [reducer.isFinished]);

  return (
    <>
      <h1
        style={{
          backgroundColor: titleColor,
        }}
      >
        The Great
        <br />
        <span id="colorDisplay">
          {reducer.selectedColor ? reducer.selectedColor : "RGB"}
        </span>
        <br />
        Color Game
      </h1>

      <div id="stripe">
        <button
          id="reset"
          onClick={() => {
            dispatch({ type: ActionTypes.GAME_START });
            trigger(true);
          }}
        >
          New Colors
        </button>
        <span id="message"></span>
        <button
          id="easyBtn"
          className="mode"
          onClick={() => {
            dispatch({ type: ActionTypes.SET_MODE_EASY });
            trigger(true);
          }}
        >
          Easy
        </button>
        <button
          id="hardBtn"
          className="mode"
          onClick={() => {
            dispatch({ type: ActionTypes.SET_MODE_HARD });
            trigger(true);
          }}
        >
          Hard
        </button>
      </div>
    </>
  );
};

export default Header;
