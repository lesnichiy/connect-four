import { useSelector } from 'react-redux';
import styles from './CurrentPlayerDashboard.module.css';

function CurrentPlayerDashboard(props) {
  const currentPlayer = useSelector(state => state.gameBoard.currentPlayer);

  const currentCol = useSelector(state => state.gameBoard.currentColCursorOver);

  return (
      <div className={styles.wrapper}>
        Current Player:
        <div
            className={[styles.chip, styles[currentPlayer]].join(' ')}
            style={{
              left: currentCol * 50
            }}
        >
        </div>
      </div>
  );
}

export default CurrentPlayerDashboard;