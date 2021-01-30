import { useSelector } from 'react-redux';
import styles from './CurrentPlayerDashboard.module.css';

function CurrentPlayerDashboard(props) {
  const currentPlayer = useSelector(state => state.gameBoard.currentPlayer);

  const currentCol = useSelector(state => state.gameBoard.currentColCursorOver);

  return (
      <div className={styles.wrapper}>
        {/*Current Player:*/}
        <div className={styles['chip-wrapper']}
             style={{
               left: currentCol * 50 //shift on 50px - width of cell
             }}>
          <div className={[styles.chip, styles[currentPlayer]].join(' ')}>
          </div>
        </div>
      </div>
  );
}

export default CurrentPlayerDashboard;