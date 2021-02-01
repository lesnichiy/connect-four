import styles from './GameBoard.module.css';
import GameBoardCell from './GameBoardCell';
import { GAME_FIELD_COLUMNS_NUM, GAME_FIELD_ROWS_NUM } from '../../utils/appConstants';

function GameBoard() {

  const cells = [];


  //Create GameBoard
  for (let i = GAME_FIELD_ROWS_NUM - 1; i >=0; i--) {
    const row = [];

    for (let j = 0; j < GAME_FIELD_COLUMNS_NUM; j++) {
      row.push(<GameBoardCell key={`${i}${j}`} rowNum={i} colNum={j} />);
    }
    cells.push(row);
  }

  return (
    <div className={styles.wrapper}>
      {cells}
    </div>
  );
}

export default GameBoard;
