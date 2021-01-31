import { useDispatch } from 'react-redux';
import { returnToStartScreenAction } from '../../store/actions/returnToStartScreen';
import styles from './ReturnToStartScreenBtn.module.css';

function ReturnToStartScreenBtn() {
  const dispatch = useDispatch();

  const returnToStartScreen = () => dispatch(returnToStartScreenAction());

  return (
      <button className={styles.button} onClick={(e) => {
        e.preventDefault();
        returnToStartScreen();
      }}>Back to menu</button>
  );
}

export default ReturnToStartScreenBtn;