const initialState = {
  isGameOn: false,
  isGameOver: false
};

const appNavigation = (state = initialState, action) => {

  switch (action.type) {
    case 'GAME_ON_OFF': {
      const { isGameOn } = action.payload;

      return {
          ...state,
          isGameOn: !isGameOn
      }
    }
    case 'GAME_OVER': {
      const { isGameOver } = action.payload;

      return {
        ...state,
        isGameOver: isGameOver
      }
    }
    case 'RETURN_TO_START_SCREEN': {
      return {
        ...state,
        isGameOn: false,
        isGameOver: false
      };
    }
    default:
      return state;
  }

};

export { appNavigation };