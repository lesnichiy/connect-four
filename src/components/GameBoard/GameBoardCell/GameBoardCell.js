import PropTypes from 'prop-types';
import styles from './GameBoardCell.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changePlayerAction } from '../../../store/actions/changePlayer';
import { dropDiscToColumnAction } from '../../../store/actions/dropDiscToColumn';
import { countMovesRedAction } from '../../../store/actions/countMovesRed';
import { countMovesYellowAction } from '../../../store/actions/countMovesYellow';
import store from '../../../store/store';
import { checkWinner } from '../../../utils/checkWinner';

function GameBoardCell(props) {
  const { rowNum, colNum } = props;

  const state = store.getState();
  const { playerOne, playerTwo } = state.players;

  const dispatch = useDispatch();
  const currentPlayer = useSelector( state => state.gameBoard.currentPlayer );
  const changePlayer = (player) => {
    player = (player === playerOne.color) ? playerTwo.color : playerOne.color;
    return dispatch(changePlayerAction(player));
  };

  const dropDiscToColumn = (col, player) => dispatch(dropDiscToColumnAction(col, player));
  const countMovesRed = (player) => dispatch(countMovesRedAction(player));
  const countMovesYellow = (player) => dispatch(countMovesYellowAction(player));

  // define class for current cell
  const currentCellColor = state.gameBoard.board[colNum][rowNum];
  const cellColorClass = (currentCellColor) ? currentCellColor : '' ;

  const handleClickByCell = () => {
    if ( state.gameBoard.board[colNum].length < 6 ) {
      changePlayer(currentPlayer);
      dropDiscToColumn(colNum, currentPlayer);

      if (currentPlayer === playerOne.color) countMovesRed(currentPlayer);
      if (currentPlayer === playerTwo.color) countMovesYellow(currentPlayer);


      checkWinner();
    }
  };

  return (
      <div
          className={[styles.wrapper, styles[cellColorClass]].join(' ')}
          onClick={handleClickByCell}
      >
        {/*row: {rowNum}, col: {colNum}*/}
      </div>
  );
}

GameBoardCell.propTypes = {
  rowNum: PropTypes.number,
  colNum: PropTypes.number,
};

export default GameBoardCell;