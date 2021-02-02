const initialState = {
  isWin: false,
  color: '',
  moves: 0,
  time: 0
};

const winner = (state = initialState, action) => {

  switch (action.type) {
    case 'STOP_TIMER': {
      const { time } = action.payload;

      return {
        ...state,
        time
      };
    }
    case 'SAVE_WINNER': {
      const { color, moves } = action.payload;

      return {
        ...state,
        color,
        moves,
        isWin: true
      };
    }
    default:
      return state;
  }

};

export { winner };