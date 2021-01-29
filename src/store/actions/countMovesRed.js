export const countMovesRedAction = (player) => {
  return {
    type: 'COUNT_MOVES_RED',
    payload: {
      player: player
    }
  }
};