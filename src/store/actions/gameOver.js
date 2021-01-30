export const gameOverAction = (isGameOver) => {
  return {
    type: 'GAME_OVER',
    payload: {
      isGameOver: isGameOver
    }
  }
};