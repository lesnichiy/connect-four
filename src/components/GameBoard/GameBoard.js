import styles from './GameBoard.module.css';
import GameBoardCell from './GameBoardCell';

function GameBoard() {

  const cells = [];


  //Create GameBoard
  for (let i = 5; i >=0; i--) {
    const row = [];

    for (let j = 0; j <= 6; j++) {
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
