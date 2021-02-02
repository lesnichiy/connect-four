export const stopTimerAction = (time) => {
  return {
    type: 'STOP_TIMER',
    payload: {
      time
    }
  }
};