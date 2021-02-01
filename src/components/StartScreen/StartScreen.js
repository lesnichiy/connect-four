import styles from './StartScreen.module.css';
import { gameOnOffAction } from '../../store/actions/gameOnOff';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function StartScreen() {

  const isGameOn = useSelector(state => state.appNavigation.isGameOn);
  const dispatch = useDispatch();
  const startGame = (isGameOn) => dispatch(gameOnOffAction(isGameOn));

  return (
      <div className={styles.wrapper}>
        <Link className={styles.button} to={'/game'} onClick={() => startGame(isGameOn)}>Start Game</Link>
        <Link className={styles.button} to={'/settings'}>Settings</Link>
        <Link className={styles.button} to={'/bestscores'}>Best Scores</Link>
      </div>
  );
}

export default StartScreen;