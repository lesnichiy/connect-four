import styles from './StartScreen.module.css';

function StartScreen(props) {
  return (
      <div className={styles.wrapper}>
        <button className={styles.button}>Start Game</button>
        <button className={styles.button}>Settings</button>
        <button className={styles.button}>Best Scores</button>
        <button className={styles.button}>About</button>
      </div>
  );
}

export default StartScreen;