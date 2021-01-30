const initialState = {
  isStartScreenOn: true,
  isGameOn: false,
  isSettingsOn: false,
  isBestScoresOn: false,
  isGameOver: false
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
    case 'GAME_OVER': {
      const { isGameOver } = action.payload;

      return {
        ...state,
        isGameOver: isGameOver
      }
    }
    case 'CLOSE_GAME': {
      return {
        ...state,
        isStartScreenOn: true,
        isGameOn: false,
        isSettingsOn: false,
        isBestScoresOn: false,
        isGameOver: false
      };
    }
    default:
      return state;
  }

};

export { appNavigation };