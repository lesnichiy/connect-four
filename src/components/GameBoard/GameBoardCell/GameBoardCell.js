import PropTypes from 'prop-types';
import styles from './GameBoardCell.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changePlayerAction } from '../../../store/actions/changePlayer';
import store from '../../../store/store';

function GameBoardCell(props) {
  const { rowNum, colNum } = props;

  const state = store.getState();
  const dispatch = useDispatch();
  const currentPlayer = useSelector( state => state.gameBoard.currentPlayer );
  const changePlayer = (player) => {
    player = (player === state.gameBoard.players.playerOne) ? state.gameBoard.players.playerTwo : state.gameBoard.players.playerOne;
    console.log(player, props.colNum);
    return dispatch(changePlayerAction(player));
  };

  return (
      <div
          className={styles.wrapper}
          onClick={() => changePlayer(currentPlayer)}
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