export const gameOnOffAction = (isGameOn) => {
  return {
    type: 'GAME_ON_OFF',
    payload: {
      isGameOn: !isGameOn
    }
  };
};