const initialState = {
  fact: 'There is no fact here yet. You need to win once to get the fact.'
};

const interestingFact = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_FACT': {
      const { fact } = action.payload;

      return {
        fact
      };
    }
    default:
      return state;
  }
};

export { interestingFact };