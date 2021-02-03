import styles from './WinnerPopup.module.css';
import store from '../../store/store';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeWinnerPopupAction } from '../../store/actions/closeWinnerPopup';
import { addZero } from '../../utils/addZero';
import { saveResultInBestScores } from '../../utils/saveResultInBestScores';

const WinnerPopup = () => {
  const state = store.getState();
  const { color, moves, time } = state.winner;

  const dispatch = useDispatch();
  const closePopup = () => dispatch(closeWinnerPopupAction());

  const min = Math.floor(time / 60);
  const sec = time % 60;

  const timeStr = `${addZero(min)}:${addZero(sec)}`;


  //set value in BestScores
  useEffect(() => {
    saveResultInBestScores(color, moves, time);
  }, []);

  return (
      <div className={styles.popupWrapper}>
        <div className={styles.popupWindow}>
          <button
              className={styles.close}
              onClick={(e) => {
                e.preventDefault();
                closePopup();
              }}></button>
          <div className={styles.player}>
            <div className={styles.title}>Player</div>
            <div className={[styles.chip, styles[color]].join(' ')}></div>
            <div className={styles.wins}>WINS!</div>
          </div>
          <div className={styles.moves}>Moves: {moves}</div>
          <div className={styles.time}>Time: {timeStr}</div>
          <div className={styles.offerToRequest}>You won in {moves} moves. Want to know an interesting fact about this number?</div>
        </div>
        <div className={styles.popupOverlay}></div>
      </div>
  );
};

export default WinnerPopup;