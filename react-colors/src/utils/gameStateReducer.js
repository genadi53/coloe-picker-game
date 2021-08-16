export const ActionTypes = {
  GAME_START: "GAME_START",
  SET_MODE_EASY: "SET_MODE_EASY",
  SET_MODE_HARD: "SET_MODE_HARD",
  GAME_END: "GAME_END",
  SET_SELECTED_COLOR: "SET_SELECTED_COLOR",
};

export const initialState = {
  mode: "hard",
  numberOfSquares: 6,
  selectedColor: "",
  isFinished: false,
};

export const GameStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_MODE_EASY: {
      return {
        selectedColor: "",
        mode: "easy",
        numberOfSquares: 3,
        isFinished: false,
      };
    }
    case ActionTypes.SET_MODE_HARD: {
      return {
        selectedColor: "",
        mode: "hard",
        numberOfSquares: 6,
        isFinished: false,
      };
    }
    case ActionTypes.SET_SELECTED_COLOR: {
      return {
        ...state,
        selectedColor: action.payload,
      };
    }
    case ActionTypes.GAME_END: {
      return {
        ...state,
        isFinished: action.payload,
      };
    }
    case ActionTypes.GAME_START: {
      return {
        ...state,
        selectedColor: "",
        isFinished: false,
      };
    }
    default:
      return state;
  }
};
