import styles from './App.module.css';
import StartScreen from '../StartScreen/StartScreen';
import { useSelector } from 'react-redux';
import Game from '../Game';

function App(props) {

  const isGameOn = useSelector(state => state.appNavigation.isGameOn);
  const isStartScreenOn = useSelector(state => state.appNavigation.isStartScreenOn);

  return (
    <div className={styles['app-wrapper']}>
      App: CONNECT FOUR (beta)
      {isStartScreenOn && <StartScreen/>}
      {isGameOn && <Game/>}
    </div>
  );
}

export default App;
