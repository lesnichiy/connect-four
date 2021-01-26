import store from '../store/store';

export const checkWinner = () => {
  const state = store.getState();
  const { col, row, discColor } = state.gameBoard.lastDiscDropCell;
  const currentBoardArray = state.gameBoard.board;

  const checkHorizontal = () => {
    let countSameCell = 1;
    //horizontal check
    // go right
    for (let i = col + 1; i <= 6; i++) {
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
    return (countSameCell >= 4);
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
    for (let i = row + 1; i <= 5; i++) {
      if (currentBoardArray[col][i] === discColor) {
        countSameCell++;
      } else {
        break;
      }
    }
    return (countSameCell >= 4);
  };

  const checkPrimaryDiagonal = () => {
    let countSameCell = 1;
    //Primary diagonal check
    // go down
    for (let i = col + 1, j = row - 1; (i <= 6 && j >= 0); i++, j--) {
      if (currentBoardArray[i][j] === discColor) {
        countSameCell++;
      } else {
        break;
      }
    }
    //go up
    for (let i = col - 1, j = row + 1; (i >= 0 && j <= 5); i--, j++) {
      if (currentBoardArray[i][j] === discColor) {
        countSameCell++;
      } else {
        break;
      }
    }
    return (countSameCell >= 4);
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
    for (let i = col + 1, j = row + 1; (i <= 6 && j <= 5); i++, j++) {
      if (currentBoardArray[i][j] === discColor) {
        countSameCell++;
      } else {
        break;
      }
    }
    return (countSameCell >= 4);
  };

  if (checkHorizontal()
      || checkVertical()
      || checkPrimaryDiagonal()
      || checkSecondaryDiagonal()
  )
  {
    console.log(discColor, ' is WIN ');
  }
};