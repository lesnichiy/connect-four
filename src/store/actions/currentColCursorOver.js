export const currentColCursorOverAction = (colNum) => {
  return {
    type: 'CHANGE_CURRENT_COL_CURSOR_OVER',
    payload: {
      colNum
    }
  };
};