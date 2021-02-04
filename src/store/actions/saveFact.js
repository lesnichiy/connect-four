export const saveFactAction = (fact, number) => {
  return (dispatch) => {
    dispatch({
      type: 'SAVE_FACT',
      payload: {
        fact,
        number
      }
    });
  };
};