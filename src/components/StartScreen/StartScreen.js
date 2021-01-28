import styles from './StartScreen.module.css';
import store from '../../store/store';
import { gameOnOffAction } from '../../store/actions/gameOnOff';
import { useDispatch, useSelector } from 'react-redux';

function StartScreen(props) {

  const  state = store.getState();
  const isGameOn = useSelector(state => state.appNavigation.isGameOn);
  const dispatch = useDispatch();
  const startGame = (isGameOn) => dispatch(gameOnOffAction(isGameOn));

  return (
      <div className={styles.wrapper}>
        <button className={styles.button} onClick={() => startGame(isGameOn)}>Start Game</button>
        <button className={styles.button}>Settings</button>
        <button className={styles.button}>Best Scores</button>
        <button className={styles.button}>About</button>
      </div>
  );
}

export default StartScreen;