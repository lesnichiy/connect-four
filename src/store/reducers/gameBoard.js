const initialState = {
  lastDiscDropCell: {
    discColor: '',
    col: null,
    row: null
  },
  currentColCursorOver: 0,
  currentPlayer: 'red',
  board: [
    [], // col 0 - row 0 is bottom, row 5 is top
    [], // col 1
    [], // col 2
    [], // col 3
    [], // col 4
    [], // col 5
    [], // col 6
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
      const newBoard = state.board.slice();
      newBoard[col].push(currentPlayer);
      const row = newBoard[col].length - 1;

      return {
        ...state,
        board: newBoard,
        lastDiscDropCell: {
          discColor: currentPlayer,
          col: col,
          row: row
        }
      };
    }
    case 'CHANGE_CURRENT_COL_CURSOR_OVER': {
      const { colNum } = action.payload;

      return {
        ...state,
        currentColCursorOver: colNum
      };
    }
    case 'RETURN_TO_START_SCREEN': {
      return {
        ...state,
        lastDiscDropCell: {
          discColor: '',
          col: null,
          row: null
        },
        currentColCursorOver: 0,
        currentPlayer: 'red',
        board: [
          [], // col 0 - row 0 is bottom, row 5 is top
          [], // col 1
          [], // col 2
          [], // col 3
          [], // col 4
          [], // col 5
          [], // col 6
        ]
      };
    }
    default:
      return state;
  }
};

export { gameBoard };