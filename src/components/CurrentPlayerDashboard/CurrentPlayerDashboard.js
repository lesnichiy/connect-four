import { useSelector } from 'react-redux';
import styles from './CurrentPlayerDashboard.module.css';

function CurrentPlayerDashboard(props) {
  const currentPlayer = useSelector( state => state.gameBoard.currentPlayer );

  return (
      <div>
        Current Player: <div className={[styles.chip, styles[currentPlayer]].join(' ')}></div>
      </div>
  );
}

export default CurrentPlayerDashboard;