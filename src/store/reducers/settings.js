const initialState = {
  playerRedName: 'Red',
  playerYellowName: 'Yellow'
};

const settings = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_SETTINGS': {
      const { playerRedName, playerYellowName } = action.payload;

      return {
          ...state,
        playerRedName: playerRedName || 'Incognito',
        playerYellowName: playerYellowName || 'Incognito'
      };
    }
    default:
      return state;
  }
};

export { settings };