import styles from './PlayerDashboard.module.css';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import store from '../../store/store'

function PlayerDashboard(props) {
  const player = props.player;

  const state = store.getState();

  //const players = useSelector(state => state.players);
  //const isGameOver = useSelector(state => state.appNavigation.isGameOver);
  //const lastPlayerColor = useSelector(state => state.gameBoard.lastDiscDropCell.discColor);
  const currentPlayer = useSelector(state => state.gameBoard.currentPlayer);
  //const { currentPlayer } = state.gameBoard;
  const lastPlayerColor = state.gameBoard.lastDiscDropCell.discColor;
  const { isGameOver } = state.appNavigation;
  const { players } = state;

  let moves = (player === state.players.playerOne.color)
      ? players.playerOne.moves
      : players.playerTwo.moves;

  const wrapperClasses = (player === currentPlayer)
      ? [styles.wrapper].join(' ')
      : [styles.wrapper, styles.inactive].join(' ');

  return (
      <div className={wrapperClasses}>
        <div className={styles.player}>
          <div className={styles.title}>Player</div>
          <div className={[styles.chip, styles[player]].join(' ')}></div>
        </div>
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
