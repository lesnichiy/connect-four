import styles from './WinnerPopup.module.css';
import store from '../../store/store';

const WinnerPopup = () => {
  const state = store.getState();
  const { color, moves, time } = state.winner;

  

  return (
      <div className={styles.popupWrapper}>
        <div className={styles.popupWindow}>
          <div>Player {color} WINS</div>
          <div>Moves: {moves}</div>
          <div>Time: {time}</div>
        </div>
        <div className={styles.popupOverlay}></div>
      </div>
  );
};

export default WinnerPopup;