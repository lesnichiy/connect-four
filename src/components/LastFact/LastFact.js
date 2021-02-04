import styles from './LastFact.module.css';
import store from '../../store/store';
import ReturnToStartScreenBtn from '../ReturnToStartScreenBtn/ReturnToStartScreenBtn';

const LastFact = () => {

  const state = store.getState();
  const { fact } = state.interestingFact;

  return (
      <div className={styles.wrapper}>
        <div className={styles.navWrapper}>
          <ReturnToStartScreenBtn/>
        </div>
        <h2 className={styles.title}>Last Fact</h2>
        <div className={styles.fact}>
          &laquo;{fact}&raquo;
        </div>
      </div>
  );
};

export default LastFact;