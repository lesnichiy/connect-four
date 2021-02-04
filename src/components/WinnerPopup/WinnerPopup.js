import styles from './WinnerPopup.module.css';
import store from '../../store/store';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeWinnerPopupAction } from '../../store/actions/closeWinnerPopup';
import { saveFactAction } from '../../store/actions/saveFact';
import { addZero } from '../../utils/addZero';
import { saveResultInBestScores } from '../../utils/saveResultInBestScores';

const WinnerPopup = () => {

  const state = store.getState();
  const { name, color, moves, time } = state.winner;

  const [ textAboutFact, setTextAboutFact ] = useState(`You won in ${moves} moves. Want to know an interesting fact about this number?`);

  const dispatch = useDispatch();
  const closePopup = () => dispatch(closeWinnerPopupAction());

  const min = Math.floor(time / 60);
  const sec = time % 60;

  const timeStr = `${addZero(min)}:${addZero(sec)}`;

  const getFact = async () => {
    const url = `http://numbersapi.com/${moves}/`;
    fetch(url)
        .then(response => response.text())
        .then(data => {
          dispatch(saveFactAction(data));
          setTextAboutFact(`«${data}»`);
        })
        .catch(err => {
          setTextAboutFact(`Something go wrong. Try later.`)
          console.log(err);
        });
  };

  //set value in BestScores
  useEffect(() => {
    saveResultInBestScores(name, color, moves, time);
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
            <div className={styles.title}>{name}</div>
            <div className={[styles.chip, styles[color]].join(' ')}></div>
            <div className={styles.wins}>WINS!</div>
          </div>
          <div className={styles.moves}>Moves: {moves}</div>
          <div className={styles.time}>Time: {timeStr}</div>
          <div className={styles.offerToRequest}>{textAboutFact}</div>
          <button onClick={getFact}>Get fact</button>
        </div>
        <div className={styles.popupOverlay}></div>
      </div>
  );
};

export default WinnerPopup;