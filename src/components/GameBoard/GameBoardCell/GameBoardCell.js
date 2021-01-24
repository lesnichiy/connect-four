import PropTypes from 'prop-types';
import styles from './GameBoardCell.module.css';

function GameBoardCell(props) {
  const { rowNum, colNum } = props;

  return (
      <div className={styles.wrapper}>
        row: {rowNum}, col: {colNum}
      </div>
  );
}

GameBoardCell.propTypes = {
  rowNum: PropTypes.number,
  colNum: PropTypes.number,
};

export default GameBoardCell;