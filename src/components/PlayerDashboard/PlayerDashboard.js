import styles from './PlayerDashboard.module.css';
import PropTypes from 'prop-types';

function PlayerDashboard(props) {
  const player = props.player;

  return (
      <div className={styles.wrapper}>
        <div className={styles.player}>
          <div className={styles.title}>Player</div>
          <div className={[styles.chip, styles[player]].join(' ')}></div>
        </div>
        <div className={styles.moves}>Moves: </div>
      </div>
  );
}

PlayerDashboard.propTypes = {
  player: PropTypes.string
};

export default PlayerDashboard;
