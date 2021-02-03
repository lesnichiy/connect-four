import styles from './ResultRow.module.css';
import PropTypes from 'prop-types';
import { addZero } from '../../../../utils/addZero';

const ResultRow = (props) => {
  const { name, color, moves, time } = props;

  const min = Math.floor(time / 60);
  const sec = time % 60;
  const timeStr = `${addZero(min)}:${addZero(sec)}`;


  return (
      <tr>
        <td>{name}</td>
        <td><div className={[styles.chip, styles[color]].join(' ')}></div></td>
        <td>{moves}</td>
        <td>{timeStr}</td>
      </tr>
  );
};

ResultRow.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  moves: PropTypes.number,
  time: PropTypes.number
};

export default ResultRow;