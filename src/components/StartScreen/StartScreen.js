import styles from './StartScreen.module.css';
import { gameOnOffAction } from '../../store/actions/gameOnOff';
import { settingsOnOffAction } from '../../store/actions/settingsOnOff';
import { startScreenOnOffAction } from '../../store/actions/startScreenOnOff';
import { useDispatch, useSelector } from 'react-redux';

function StartScreen(props) {

  const isGameOn = useSelector(state => state.appNavigation.isGameOn);
  const isStartScreenOn = useSelector(state => state.appNavigation.isStartScreenOn);
  const isSettingsOn = useSelector(state => state.appNavigation.isSettingsOn);
  const dispatch = useDispatch();
  const startGame = (isGameOn) => dispatch(gameOnOffAction(isGameOn));
  const startScreenShowHide = (isStartScreenOn) => dispatch(startScreenOnOffAction(isStartScreenOn));
  const settingsOn = (isSettingsOn) => dispatch(settingsOnOffAction(isSettingsOn));

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
                  settingsOn(isSettingsOn)
                  startScreenShowHide(isStartScreenOn);
                }}>Settings</button>
        <button className={styles.button}
                onClick={(e) => {e.preventDefault();
                }}>Best Scores</button>
      </div>
  );
}

export default StartScreen;