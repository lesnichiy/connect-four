import styles from './App.module.css';
import GameBoard from '../GameBoard';
import GameDashboard from '../GameDashboard';
import StartScreen from '../StartScreen/StartScreen';

function App(props) {



  return (
    <div className={styles['app-wrapper']}>
      App
      <StartScreen/>
      {/*<GameDashboard />
      <GameBoard />*/}
    </div>
  );
}

export default App;
