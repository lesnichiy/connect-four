import styles from './StartScreen.module.css';
import store from '../../store/store';
import { gameOnOffAction } from '../../store/actions/gameOnOff';
import { startScreenOnOffAction } from '../../store/actions/startScreenOnOff';
import { useDispatch, useSelector } from 'react-redux';

function StartScreen(props) {

  const isGameOn = useSelector(state => state.appNavigation.isGameOn);
  const isStartScreenOn = useSelector(state => state.appNavigation.isStartScreenOn);
  const dispatch = useDispatch();
  const startGame = (isGameOn) => dispatch(gameOnOffAction(isGameOn));
  const startScreenShowHide = (isStartScreenOn) => dispatch(startScreenOnOffAction(isStartScreenOn));

  return (
      <div className={styles.wrapper}>
        <button className={styles.button}
                onClick={() => {
                  startGame(isGameOn);
                  startScreenShowHide(isStartScreenOn);
                }}>Start Game</button>
        <button className={styles.button}>Settings</button>
        <button className={styles.button}>Best Scores</button>
        <button className={styles.button}>About</button>
      </div>
  );
}

export default StartScreen;