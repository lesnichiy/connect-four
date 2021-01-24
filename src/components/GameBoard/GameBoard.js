import styles from './GameBoard.module.css';
import GameBoardCell from './GameBoardCell';

function GameBoard() {
  const cells = [];

  for (let i = 5; i >=0; i--) {
    const row = [];

    for (let j = 0; j <= 6; j++) {
      row.push(<GameBoardCell rowNum={i} colNum={j} />);
    }
    cells.push(row);
  }

  console.log(cells);

  return (
    <div className={styles.wrapper}>
      {cells}
    </div>
  );
}

export default GameBoard;
