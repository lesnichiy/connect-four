import styles from './StartScreen.module.css';
import { gameOnOffAction } from '../../store/actions/gameOnOff';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

function StartScreen() {

  const isGameOn = useSelector(state => state.appNavigation.isGameOn);
  const dispatch = useDispatch();
  const startGame = (isGameOn) => dispatch(gameOnOffAction(isGameOn));

  return (

      <div className={styles.wrapper}>
        <Header/>
        <div className={styles.links}>
          <Link className={styles.button} to={'/game'} onClick={() => startGame(isGameOn)}>Start Game</Link>
          <Link className={styles.button} to={'/settings'}>Settings</Link>
          <Link className={styles.button} to={'/bestscores'}>Best Scores</Link>
          <Link className={styles.button} to={'/lastfact'}>Last Fact</Link>
        </div>
      </div>
  );
}

export default StartScreen;