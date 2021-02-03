import PropTypes from 'prop-types';
import styles from './GameBoardCell.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changePlayerAction } from '../../../store/actions/changePlayer';
import { dropDiscToColumnAction } from '../../../store/actions/dropDiscToColumn';
import { countMovesRedAction } from '../../../store/actions/countMovesRed';
import { countMovesYellowAction } from '../../../store/actions/countMovesYellow';
import { currentColCursorOverAction } from '../../../store/actions/currentColCursorOver';
import store from '../../../store/store';
import { checkWinner } from '../../../utils/checkWinner';
import { gameOverAction } from '../../../store/actions/gameOver';
import { GAME_FIELD_ROWS_NUM } from '../../../utils/appConstants';

function GameBoardCell(props) {
  const { rowNum, colNum } = props;

  const state = store.getState();
  const { playerOne, playerTwo } = state.players;
  const isGameOver = state.appNavigation.isGameOver;

  const dispatch = useDispatch();
  const currentPlayer = useSelector( state => state.gameBoard.currentPlayer );
  const changePlayer = (player) => {
    player = (player === playerOne.color) ? playerTwo.color : playerOne.color;
    return dispatch(changePlayerAction(player));
  };

  const dropDiscToColumn = (col, player) => dispatch(dropDiscToColumnAction(col, player));
  const countMovesRed = (player) => dispatch(countMovesRedAction(player));
  const countMovesYellow = (player) => dispatch(countMovesYellowAction(player));
  const gameOver = (isGameOver) => dispatch(gameOverAction(isGameOver));

  // define class for current cell
  const currentCellColor = state.gameBoard.board[colNum][rowNum];
  const cellColorClass = (currentCellColor) ? currentCellColor : '' ;

  const handleClickByCell = () => {
    if ( state.gameBoard.board[colNum].length < GAME_FIELD_ROWS_NUM) {
      if (isGameOver) return; //lock Click if Game Over
      changePlayer(currentPlayer);
      dropDiscToColumn(colNum, currentPlayer);
      if (currentPlayer === playerOne.color) countMovesRed(currentPlayer);
      if (currentPlayer === playerTwo.color) countMovesYellow(currentPlayer);
      gameOver(checkWinner());
    }
  };

  const changeCurrentColNum = (colNum) => dispatch(currentColCursorOverAction(colNum));

  const handleMouseOver = () => {
    if (isGameOver) return; //lock movement of Current Chip if Game Over
    changeCurrentColNum(colNum);
  };

  return (
      <div
          className={styles.wrapper}
          onClick={handleClickByCell}
          onMouseOver={handleMouseOver}
      >
        <div className={[styles.cell, styles[cellColorClass]].join(' ')}>
          {/*row: {rowNum}, col: {colNum}*/}
        </div>
      </div>
  );
}

GameBoardCell.propTypes = {
  rowNum: PropTypes.number,
  colNum: PropTypes.number,
};

export default GameBoardCell;