import PropTypes from 'prop-types';
import styles from './GameBoardCell.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changePlayerAction } from '../../../store/actions/changePlayer';
import { dropDiscToColumnAction } from '../../../store/actions/dropDiscToColumn';
import store from '../../../store/store';
import { checkWinner } from '../../../utils/checkWinner';

function GameBoardCell(props) {
  const { rowNum, colNum } = props;

  const state = store.getState();
  const dispatch = useDispatch();
  const currentPlayer = useSelector( state => state.gameBoard.currentPlayer );
  const changePlayer = (player) => {
    player = (player === state.gameBoard.players.playerOne) ? state.gameBoard.players.playerTwo : state.gameBoard.players.playerOne;
    return dispatch(changePlayerAction(player));
  };

  const dropDiscToColumn = (col, player) => dispatch(dropDiscToColumnAction(col, player));

  // define class for current cell
  const currentCellColor = state.gameBoard.board[colNum][rowNum];
  const cellColorClass = (currentCellColor) ? currentCellColor : '' ;

  return (
      <div
          className={[styles.wrapper, styles[cellColorClass]].join(' ')}
          onClick={() => {
              if ( state.gameBoard.board[colNum].length < 6 ) {
                changePlayer(currentPlayer);
                dropDiscToColumn(colNum, currentPlayer);
                checkWinner();
              }
            }
          }
      >
        row: {rowNum}, col: {colNum}
      </div>
  );
}

GameBoardCell.propTypes = {
  rowNum: PropTypes.number,
  colNum: PropTypes.number,
};

export default GameBoardCell;