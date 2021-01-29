export const countMovesYellowAction = (player) => {
  return {
    type: 'COUNT_MOVES_YELLOW',
    payload: {
      player: player
    }
  }
};