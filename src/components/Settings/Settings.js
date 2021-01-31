import styles from './Settings.module.css';
import ReturnToStartScreenBtn from '../ReturnToStartScreenBtn'

function Settings(props) {
  return (
      <div className={styles.wrapper}>
        <div className={styles['nav-wrapper']}>
          <ReturnToStartScreenBtn/>
        </div>
        <div>
          <h2 className={styles.title}>Settings</h2>
        </div>
      </div>
  );
}

export default Settings;