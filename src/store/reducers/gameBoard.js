const initialState = {
  players: {
    playerOne: 'red',
    playerTwo: 'yellow'
  },
  currentPlayer: 'red',
  board: [
    [], // col 0
    [], // col 1
    [], // col 2
    [], // col 3
    [], // col 4
    [], // col 5
    ['www'], // col 6
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
    case 'DROP_DISC_TO_COLUMN': {
      const { col, currentPlayer } = action.payload;
      const newBoard = state.board;
      newBoard[col].push(currentPlayer);

      return {
        ...state,
        board: newBoard
      };
    }
    default:
      return state;
  }
};

export { gameBoard };