import styles from './ResultsTable.module.css';
import {BEST_SCORES_LIST_NAME} from '../../../utils/appConstants';
import ResultRow from './ResultRow';

const ResultsTable = () => {
  const currentBestScoresList = JSON.parse(localStorage.getItem(BEST_SCORES_LIST_NAME)) || null;
  let resultsList = null;

  if (currentBestScoresList) {
    resultsList = currentBestScoresList.map( (result, index) => {
      return <ResultRow key={index}
                        name={result.name}
                        color={result.color}
                        moves={result.moves}
                        time={result.time}/>;
    });
  }

  return (
      <div>
        <table className={styles.table}>
          <thead>
          <tr className={styles.tableHeader}>
            <th>Name</th>
            <th>Color</th>
            <th>Moves</th>
            <th>Time</th>
          </tr>
          </thead>
          <tbody className={styles.tableBody}>
            {resultsList || <tr><td colSpan={4}>Best results list is empty</td></tr>}
          </tbody>
        </table>
      </div>
  );
};

export default ResultsTable;