const initialState = {
  fact: 'There is no fact here yet. You need to win once to get the fact.',
  number: null
};

const interestingFact = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_FACT': {
      const { fact, number } = action.payload;

      return {
        fact,
        number
      };
    }
    default:
      return state;
  }
};

export { interestingFact };