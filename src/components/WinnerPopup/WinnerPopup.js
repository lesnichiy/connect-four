import styles from './WinnerPopup.module.css';

const WinnerPopup = () => {
  return (
      <div className={styles.popupWrapper}>
        <div className={styles.popupWindow}>!!!WINNER!!!</div>
        <div className={styles.popupOverlay}></div>
      </div>
  );
};

export default WinnerPopup;