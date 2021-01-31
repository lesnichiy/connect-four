import styles from './StartScreen.module.css';
import { gameOnOffAction } from '../../store/actions/gameOnOff';
import { settingsOnOffAction } from '../../store/actions/settingsOnOff';
import { startScreenOnOffAction } from '../../store/actions/startScreenOnOff';
import { bestScoresOnOffAction } from '../../store/actions/bestScoresOnOff';
import { useDispatch, useSelector } from 'react-redux';

function StartScreen() {

  const isGameOn = useSelector(state => state.appNavigation.isGameOn);
  const isStartScreenOn = useSelector(state => state.appNavigation.isStartScreenOn);
  const isSettingsOn = useSelector(state => state.appNavigation.isSettingsOn);
  const isBestScoresOn = useSelector(state => state.appNavigation.isBestScoresOn);
  const dispatch = useDispatch();
  const startGame = (isGameOn) => dispatch(gameOnOffAction(isGameOn));
  const startScreenShowHide = (isStartScreenOn) => dispatch(startScreenOnOffAction(isStartScreenOn));
  const settingsOn = (isSettingsOn) => dispatch(settingsOnOffAction(isSettingsOn));
  const bestScoresOn = (isBestScoresOn) => dispatch(bestScoresOnOffAction(isBestScoresOn));

  return (
      <div className={styles.wrapper}>
        <button className={styles.button}
                onClick={(e) => {
                  e.preventDefault();
                  startGame(isGameOn);
                  startScreenShowHide(isStartScreenOn);
                }}>Start Game</button>
        <button className={styles.button}
                onClick={(e) => {
                  e.preventDefault();
                  settingsOn(isSettingsOn);
                  startScreenShowHide(isStartScreenOn);
                }}>Settings</button>
        <button className={styles.button}
                onClick={(e) => {
                  bestScoresOn(isBestScoresOn);
                  startScreenShowHide(isStartScreenOn);
                  e.preventDefault();
                }}>Best Scores</button>
      </div>
  );
}

export default StartScreen;