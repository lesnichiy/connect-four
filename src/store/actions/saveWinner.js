export const saveWinnerAction = (color, moves) => {
  return {
    type: 'SAVE_WINNER',
    payload: {
      color,
      moves
    }
  }
};