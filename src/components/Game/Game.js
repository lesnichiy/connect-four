import styles from './Game.module.css';
import GameBoard from '../GameBoard';
import CurrentPlayerDashboard from '../CurrentPlayerDashboard';
import PlayerDashboard from '../PlayerDashboard';
import store from '../../store/store';
import { useDispatch } from 'react-redux';
import { closeGameAction } from '../../store/actions/closeGame';

function Game(props) {

  const state = store.getState();
  const { playerOne, playerTwo } = state.players;
  const dispatch = useDispatch();

  const closeGame = () => dispatch(closeGameAction());

  return (
      <div className={styles.wrapper}>
        <div className={styles['nav-wrapper']}>
          <button className={styles.button} onClick={(e) => {
            e.preventDefault();
            closeGame();
          }}>Back to menu</button>
        </div>
        <div className={styles['game-wrapper']}>
          <PlayerDashboard player={playerOne.color}/>
          <div>
            <CurrentPlayerDashboard/>
            <GameBoard/>
          </div>
          <PlayerDashboard player={playerTwo.color}/>
        </div>
      </div>
  );
}

export default Game;