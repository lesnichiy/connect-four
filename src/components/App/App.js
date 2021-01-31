import styles from './App.module.css';
import StartScreen from '../StartScreen/StartScreen';
import { useSelector } from 'react-redux';
import Game from '../Game';
import Settings from '../Settings';

function App(props) {

  const isGameOn = useSelector(state => state.appNavigation.isGameOn);
  const isStartScreenOn = useSelector(state => state.appNavigation.isStartScreenOn);
  const isSettingsOn = useSelector(state => state.appNavigation.isSettingsOn);

  return (
    <div className={styles['app-wrapper']}>
      App: CONNECT FOUR (beta)
      {isStartScreenOn && <StartScreen/>}
      {isGameOn && <Game/>}
      {isSettingsOn && <Settings/>}
    </div>
  );
}

export default App;
