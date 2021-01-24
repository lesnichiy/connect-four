import styles from './GameBoard.module.css';
import GameBoardCell from './GameBoardCell';
import { useDispatch, useSelector } from 'react-redux';
import { changePlayerAction } from '../../store/actions/changePlayer';
import store from '../../store/store';

function GameBoard() {
  const state = store.getState();
  const cells = [];
  const dispatch = useDispatch();
  const currentPlayer = useSelector( state => state.gameBoard.currentPlayer );
  const changePlayer = (player) => {
    player = (player === state.gameBoard.players.playerOne) ? state.gameBoard.players.playerTwo : state.gameBoard.players.playerOne;
    console.log(player);
    return dispatch(changePlayerAction(player));
  };

  //Create GameBoard
  for (let i = 5; i >=0; i--) {
    const row = [];

    for (let j = 0; j <= 6; j++) {
      row.push(<GameBoardCell key={`${i}${j}`} rowNum={i} colNum={j} />);
    }
    cells.push(row);
  }

  console.log(`Cell from GameBoard component:`, cells);

  return (
    <div className={styles.wrapper} onClick={() => changePlayer(currentPlayer)}>
      {cells}

    </div>
  );
}

export default GameBoard;
