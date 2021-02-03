import styles from './PlayerDashboard.module.css';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import store from '../../store/store'

function PlayerDashboard(props) {
  const player = props.player;

  const state = store.getState();

  const lastPlayerColor = useSelector(state => state.gameBoard.lastDiscDropCell.discColor);
  const { isGameOver } = state.appNavigation;
  const { players } = state;
  const { settings } = state;

  const playerName = (player === state.players.playerOne.color)
      ? settings.playerRedName
      : settings.playerYellowName;

  let moves = (player === state.players.playerOne.color)
      ? players.playerOne.moves
      : players.playerTwo.moves;

  return (
      <div className={styles.wrapper}>
        <div className={styles.player}>
          <div className={styles.title}>Player</div>
          <div className={[styles.chip, styles[player]].join(' ')}></div>
        </div>
        <div className={styles.playerName}>Name: {playerName}</div>
        <div className={styles.moves}>Moves: {moves}</div>
        { (isGameOver && player === lastPlayerColor)
          && <div className={styles.winner}>WINNER!!!</div>}
      </div>
  );
}

PlayerDashboard.propTypes = {
  player: PropTypes.string
};

export default PlayerDashboard;
