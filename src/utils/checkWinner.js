import store from '../store/store';

export const checkWinner = () => {
  const state = store.getState();
  const { col, row, discColor } = state.gameBoard.lastDiscDropCell;
  const currentBoardArray = state.gameBoard.board;

  let countSameCell = 1;
  //horizontal check
  // go to right
  for (let i = col + 1; i <= 6; i++) {
    if (currentBoardArray[i][row] === undefined) {
      break;
    } else if (currentBoardArray[i][row] === discColor) {
      countSameCell++;
    }
  }
  //go to left
  for (let i = col - 1; i >= 0; i--) {
    if (currentBoardArray[i][row] === undefined) {
      break;
    } else if (currentBoardArray[i][row] === discColor) {
      countSameCell++;
    }
  }
  //vertical check
  // go to bottom
  for (let i = row - 1; i >= 0; i--) {
    if (currentBoardArray[col][i] === undefined) {
      break;
    } else if (currentBoardArray[col][i] === discColor) {
      countSameCell++;
    }
  }
  //go to up
  for (let i = row + 1; i <= 5; i++) {
    if (currentBoardArray[col][i] === undefined) {
      break;
    } else if (currentBoardArray[col][i] === discColor) {
      countSameCell++;
    }
  }
  if (countSameCell >= 4) {
    console.log(discColor, ' is WIN ', countSameCell);
  }

  console.log(col, row, discColor, currentBoardArray);
};