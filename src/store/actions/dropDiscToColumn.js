export const dropDiscToColumnAction = (col, player) => {
  return {
    type: 'DROP_DISC_TO_COLUMN',
    payload: {
      col: col,
      currentPlayer: player
    }
  }
};