import store from '../store/store';
import { GAME_FIELD_COLUMNS_NUM, GAME_FIELD_ROWS_NUM, WINNER_COMBINATION_LENGTH } from './appConstants';

export const checkWinner = () => {
  const state = store.getState();
  const { col, row, discColor } = state.gameBoard.lastDiscDropCell;
  const currentBoardArray = state.gameBoard.board;

  let isWinner = false;

  const checkHorizontal = () => {
    let countSameCell = 1;
    //horizontal check
    // go right
    for (let i = col + 1; i < GAME_FIELD_COLUMNS_NUM; i++) {
      if (currentBoardArray[i][row] === discColor) {
        countSameCell++;
      } else {
        break;
      }
    }
    //go left
    for (let i = col - 1; i >= 0; i--) {
      if (currentBoardArray[i][row] === discColor) {
        countSameCell++;
      } else {
        break;
      }
    }
    return (countSameCell >= WINNER_COMBINATION_LENGTH);
  };

  const checkVertical = () => {
    let countSameCell = 1;
    //vertical check
    // go to bottom
    for (let i = row - 1; i >= 0; i--) {
      if (currentBoardArray[col][i] === discColor) {
        countSameCell++;
      } else {
        break;
      }
    }
    //go to up
    for (let i = row + 1; i < GAME_FIELD_ROWS_NUM; i++) {
      if (currentBoardArray[col][i] === discColor) {
        countSameCell++;
      } else {
        break;
      }
    }
    return (countSameCell >= WINNER_COMBINATION_LENGTH);
  };

  const checkPrimaryDiagonal = () => {
    let countSameCell = 1;
    //Primary diagonal check
    // go down
    for (let i = col + 1, j = row - 1; (i < GAME_FIELD_COLUMNS_NUM && j >= 0); i++, j--) {
      if (currentBoardArray[i][j] === discColor) {
        countSameCell++;
      } else {
        break;
      }
    }
    //go up
    for (let i = col - 1, j = row + 1; (i >= 0 && j < GAME_FIELD_ROWS_NUM); i--, j++) {
      if (currentBoardArray[i][j] === discColor) {
        countSameCell++;
      } else {
        break;
      }
    }
    return (countSameCell >= WINNER_COMBINATION_LENGTH);
  };

  const checkSecondaryDiagonal = () => {
    let countSameCell = 1;
    //Secondary diagonal check
    // go down
    for (let i = col - 1, j = row - 1; (i >= 0 && j >= 0); i--, j--) {
      if (currentBoardArray[i][j] === discColor) {
        countSameCell++;
      } else {
        break;
      }
    }
    //go up
    for (let i = col + 1, j = row + 1; (i < GAME_FIELD_COLUMNS_NUM && j < GAME_FIELD_ROWS_NUM); i++, j++) {
      if (currentBoardArray[i][j] === discColor) {
        countSameCell++;
      } else {
        break;
      }
    }
    return (countSameCell >= WINNER_COMBINATION_LENGTH);
  };

  if (checkHorizontal()
      || checkVertical()
      || checkPrimaryDiagonal()
      || checkSecondaryDiagonal()
  ) {
    isWinner = true;
  }

  return isWinner;
};