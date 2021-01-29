import styles from './Game.module.css';
import GameBoard from '../GameBoard';
import CurrentPlayerDashboard from '../CurrentPlayerDashboard';
import PlayerDashboard from '../PlayerDashboard';
import store from '../../store/store';

function Game(props) {

  const state = store.getState();
  const { playerOne, playerTwo } = state.gameBoard.players;

  return (
      <div className={styles.wrapper}>
        <PlayerDashboard player={playerOne.color}/>
        <div>
          <CurrentPlayerDashboard/>
          <GameBoard/>
        </div>
        <PlayerDashboard player={playerTwo.color}/>
      </div>
  );
}

export default Game;