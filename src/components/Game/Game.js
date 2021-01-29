import styles from './Game.module.css';
import GameBoard from '../GameBoard';
import GameDashboard from '../GameDashboard';

function Game(props) {
  return (
      <div>
        <GameDashboard/>
        <GameBoard/>
      </div>
  );
}

export default Game;