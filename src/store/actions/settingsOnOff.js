export const settingsOnOffAction = (isSettingsOn) => {
  return {
    type: 'SETTINGS_ON_OFF',
    payload: {
      isSettingsOn
    }
  };
};