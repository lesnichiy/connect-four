import { useSelector } from 'react-redux';
import styles from './CurrentPlayerDashboard.module.css';
import { GAME_FIELD_WIDTH_OF_CELL_PX } from '../../utils/appConstants';

const CurrentPlayerDashboard = () => {
  const currentPlayer = useSelector(state => state.gameBoard.currentPlayer);

  const currentCol = useSelector(state => state.gameBoard.currentColCursorOver);

  return (
      <div className={styles.wrapper}>
        {/*Current Player:*/}
        <div className={styles.chipWrapper}
             style={{
               left: currentCol * GAME_FIELD_WIDTH_OF_CELL_PX //shift on 50px - width of cell
             }}>
          <div className={[styles.chip, styles[currentPlayer]].join(' ')}>
          </div>
        </div>
      </div>
  );
};

export default CurrentPlayerDashboard;