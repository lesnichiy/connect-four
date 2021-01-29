const initialState = {
  isStartScreenOn: true,
  isGameOn: false,
  isSettingsOn: false,
  isBestScoresOn: false,
  isAboutOn: false
};

const appNavigation = (state = initialState, action) => {

  switch (action.type) {
    case 'START_SCREEN_ON_OFF': {
      const { isStartScreenOn } = action.payload;

      return {
        ...state,
        isStartScreenOn: !isStartScreenOn
      }
    }
    case 'GAME_ON_OFF': {
      const { isGameOn } = action.payload;

      return {
          ...state,
          isGameOn: !isGameOn
      }
    }
    case 'SETTINGS_ON_OFF': {
      const { isSettingsOn } = action.payload;

      return {
        ...state,
        isSettingsOn
      }
    }
    case 'BEST_SCORES_ON_OFF': {
      const { isBestScoresOn } = action.payload;

      return {
        ...state,
        isBestScoresOn
      }
    }
    case 'ABOUT_ON_OFF': {
      const { isAboutOn } = action.payload;

      return {
        ...state,
        isAboutOn
      }
    }
    default:
      return state;
  }

};

export { appNavigation };