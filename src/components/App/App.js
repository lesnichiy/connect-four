import styles from './App.module.css';
import GameBoard from '../GameBoard';
import GameDashboard from '../GameDashboard';
import StartScreen from '../StartScreen/StartScreen';
import store from '../../store/store';
import { useSelector } from 'react-redux';

function App(props) {

  const state = store.getState();

  const isGameOn = useSelector(state => state.appNavigation.isGameOn);

  return (
    <div className={styles['app-wrapper']}>
      App
      <StartScreen/>

      {isGameOn &&
        <div>
          <GameDashboard />
          <GameBoard />
        </div>
      }
    </div>
  );
}

export default App;
