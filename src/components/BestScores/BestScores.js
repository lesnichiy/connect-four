import styles from './BestScores.module.css';
import ReturnToStartScreenBtn from '../ReturnToStartScreenBtn';
import ResultTable from './ResultsTable';
import { clearResultsInBestScores } from '../../utils/clearResultsInBestScores';
import { useState } from 'react';

const BestScores = () => {

  const [ isClearResults, setIsClearResults] = useState(false);

  const clearResults = () => {
    setIsClearResults(!isClearResults);
    clearResultsInBestScores();
  };

  return (
      <div className={styles.wrapper}>
        <div className={styles.navWrapper}>
          <ReturnToStartScreenBtn/>
        </div>
        <div>
          <h2 className={styles.title}>Best Scores</h2>
          <ResultTable/>
        </div>
        <button className={styles.button} onClick={clearResults}>Clear table</button>
      </div>
  );
};

export default BestScores;