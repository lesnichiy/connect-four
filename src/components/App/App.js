import styles from './App.module.css';
import GameBoard from '../GameBoard';
import GameDashboard from '../GameDashboard';

import store from '../../store/store';

function App(props) {



  return (
    <div className={styles['app-wrapper']}>
      App
      <GameDashboard />
      <GameBoard />
    </div>
  );
}

export default App;
