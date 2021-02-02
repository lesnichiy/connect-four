import styles from './WinnerPopup.module.css';
import store from '../../store/store';

const WinnerPopup = () => {
  const state = store.getState();
  const { color, moves, time } = state.winner;

  

  return (
      <div className={styles.popupWrapper}>
        <div className={styles.popupWindow}>
          <div className={styles.player}>
            <div className={styles.title}>Player</div>
            <div className={[styles.chip, styles[color]].join(' ')}></div>
            <div className={styles.wins}>WINS!</div>
          </div>
          <div className={styles.moves}>Moves: {moves}</div>
          <div className={styles.time}>Time: {time}</div>
          <div className={styles.offerToRequest}>You won in {moves} moves. Want to know an interesting fact about this number?</div>
        </div>
        <div className={styles.popupOverlay}></div>
      </div>
  );
};

export default WinnerPopup;