export const changePlayerAction = (player) => {
  return {
    type: 'CHANGE_PLAYER',
    payload: {
      player: player
    }
  }
};