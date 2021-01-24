import styles from './App.module.css';
import GameBoard from '../GameBoard';

function App() {
  return (
    <div className={styles['app-wrapper']}>
      App
      <GameBoard />
    </div>
  );
}

export default App;
