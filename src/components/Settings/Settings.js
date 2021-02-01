import styles from './Settings.module.css';
import ReturnToStartScreenBtn from '../ReturnToStartScreenBtn'

function Settings() {
  return (
      <div className={styles.wrapper}>
        <div className={styles.navWrapper}>
          <ReturnToStartScreenBtn/>
        </div>
        <div>
          <h2 className={styles.title}>Settings</h2>
        </div>
      </div>
  );
}

export default Settings;