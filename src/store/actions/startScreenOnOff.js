export const startScreenOnOffAction = (isStartScreenOn) => {
  return {
    type: 'START_SCREEN_ON_OFF',
    payload: {
      isStartScreenOn
    }
  };
};