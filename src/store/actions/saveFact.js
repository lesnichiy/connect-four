export const saveFactAction = (fact) => {
  return (dispatch) => {
    dispatch({
      type: 'SAVE_FACT',
      payload: {
        fact
      }
    });
  };
};