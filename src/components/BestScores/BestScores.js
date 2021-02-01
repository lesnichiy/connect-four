import styles from './BestScores.module.css';
import ReturnToStartScreenBtn from '../ReturnToStartScreenBtn'

function BestScores() {
  return (
      <div className={styles.wrapper}>
        <div className={styles.navWrapper}>
          <ReturnToStartScreenBtn/>
        </div>
        <div>
          <h2 className={styles.title}>Best Scores</h2>
        </div>
      </div>
  );
}

export default BestScores;