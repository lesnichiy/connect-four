import styles from './Game.module.css';
import GameBoard from '../GameBoard';
import CurrentPlayerDashboard from '../CurrentPlayerDashboard';
import PlayerDashboard from '../PlayerDashboard';
import store from '../../store/store';
import Timer from '../Timer';
import WinnerPopup from '../../components/WinnerPopup';
import ReturnToStartScreenBtn from '../ReturnToStartScreenBtn';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { returnToStartScreenAction } from '../../store/actions/returnToStartScreen';
import { saveWinnerAction } from '../../store/actions/saveWinner';

function Game() {

  const state = store.getState();
  const { playerOne, playerTwo } = state.players;
  const isGameOver = useSelector(state => state.appNavigation.isGameOver);
  const isWin = useSelector(state => state.winner.isWin);

  const dispatch = useDispatch();

  //component will unmount - clear gameBoard state when go back by browser
  useEffect(() => {
    return () => dispatch(returnToStartScreenAction());
  }, []);

  useEffect(() => {
    const color = state.gameBoard.lastDiscDropCell.discColor;
    const moves = (color === playerOne.color) ? state.players.playerOne.moves : state.players.playerTwo.moves;

    if (isGameOver) dispatch(saveWinnerAction(color, moves));
  }, [isGameOver]);

  console.log(isGameOver);

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
        {isWin && <WinnerPopup/>}
      </div>
  );
}

export default Game;