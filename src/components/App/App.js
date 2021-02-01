import styles from './App.module.css';
import StartScreen from '../StartScreen/StartScreen';
import { useSelector } from 'react-redux';
import Game from '../Game';
import Settings from '../Settings';
import BestScores from '../BestScores';

function App() {

  const isGameOn = useSelector(state => state.appNavigation.isGameOn);
  const isStartScreenOn = useSelector(state => state.appNavigation.isStartScreenOn);
  const isSettingsOn = useSelector(state => state.appNavigation.isSettingsOn);
  const isBestScoresOn = useSelector(state => state.appNavigation.isBestScoresOn);

  return (
    <div className={styles.appWrapper}>
      App: CONNECT FOUR (beta)
      {isStartScreenOn && <StartScreen/>}
      {isGameOn && <Game/>}
      {isSettingsOn && <Settings/>}
      {isBestScoresOn && <BestScores/>}
    </div>
  );
}

export default App;
