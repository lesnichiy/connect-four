import styles from './BestScores.module.css';
import ReturnToStartScreenBtn from '../ReturnToStartScreenBtn';
import ResultTable from './ResultsTable';

function BestScores() {



  return (
      <div className={styles.wrapper}>
        <div className={styles.navWrapper}>
          <ReturnToStartScreenBtn/>
        </div>
        <div>
          <h2 className={styles.title}>Best Scores</h2>
          <ResultTable/>
        </div>
      </div>
  );
}

export default BestScores;