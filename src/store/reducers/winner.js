const initialState = {
  isWin: false,
  name: 'Incognito',
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
      const { name, color, moves } = action.payload;

      return {
        ...state,
        name,
        color,
        moves,
        isWin: true
      };
    }
    case 'CLOSE_WINNER_POPUP':
    case 'RETURN_TO_START_SCREEN': {
      return {
        isWin: false,
        name: 'Incognito',
        color: '',
        moves: 0,
        time: 0
      };
    }
    default:
      return state;
  }

};

export { winner };