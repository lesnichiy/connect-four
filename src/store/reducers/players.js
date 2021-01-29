const initialState = {
  playerOne: {
    color: 'red',
    moves: 0
  },
  playerTwo: {
    color: 'yellow',
    moves: 0
  }
};

const players = (state = initialState, action) => {
  switch (action.type) {
    case 'COUNT_MOVES_RED': {
      const { player } = action.payload;
      let moves = state.playerOne.moves;
      moves += 1;

      return {
        ...state,
        playerOne: {
          color: player,
          moves
        }
      };
    }
    case 'COUNT_MOVES_YELLOW': {
      const { player } = action.payload;
      let moves = state.playerTwo.moves;
      moves += 1;

      return {
        ...state,
        playerTwo: {
          color: player,
          moves
        }
      };
    }
    default:
      return state;
  }
};

export { players };