import styles from './Game.module.css';
import GameBoard from '../GameBoard';
import CurrentPlayerDashboard from '../CurrentPlayerDashboard';

function Game(props) {
  return (
      <div>
        <CurrentPlayerDashboard/>
        <GameBoard/>
      </div>
  );
}

export default Game;