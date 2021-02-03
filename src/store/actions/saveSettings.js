export const saveSettingsAction = (playerRedName, playerYellowName) => {
  return {
    type: 'SAVE_SETTINGS',
    payload: {
      playerRedName,
      playerYellowName
    }
  };
};