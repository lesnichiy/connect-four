export const bestScoresOnOffAction = (isBestScoresOn) => {
  return {
    type: 'BEST_SCORES_ON_OFF',
    payload: {
      isBestScoresOn
    }
  };
};