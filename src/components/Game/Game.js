import styles from './Game.module.css';
import GameBoard from '../GameBoard';
import CurrentPlayerDashboard from '../CurrentPlayerDashboard';
import PlayerDashboard from '../PlayerDashboard';
import store from '../../store/store';
import Timer from '../Timer';
import ReturnToStartScreenBtn from '../ReturnToStartScreenBtn';

function Game(props) {

  const state = store.getState();
  const { playerOne, playerTwo } = state.players;

  return (
      <div className={styles.wrapper}>
        <div className={styles.navWrapper}>
          <ReturnToStartScreenBtn/>
        </div>
        <div className={styles.gameWrapper}>
          <PlayerDashboard player={playerOne.color}/>
          <div>
            <CurrentPlayerDashboard/>
            <GameBoard/>
          </div>
          <PlayerDashboard player={playerTwo.color}/>
        </div>
        <div className={styles.timeWrapper}>
          <Timer/>
        </div>
      </div>
  );
}

export default Game;