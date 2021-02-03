export const saveWinnerAction = (name, color, moves) => {
  return {
    type: 'SAVE_WINNER',
    payload: {
      name,
      color,
      moves
    }
  }
};