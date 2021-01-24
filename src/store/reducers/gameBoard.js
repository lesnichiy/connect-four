const initialState = {
  players: {
    playerOne: 'red',
    playerTwo: 'yellow'
  },
  currentPlayer: 'red',
  board: [
    [], // row 5
    [], // row 4
    [], // row 3
    [], // row 2
    [], // row 1
    [], // row 0
  ]
};

const gameBoard = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_PLAYER': {
      const { player } = action.payload;

      return {
          ...state,
          currentPlayer: player
      };
    }
    default:
      return state;
  }
};

export { gameBoard };