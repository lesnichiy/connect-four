import { useDispatch } from 'react-redux';
import { returnToStartScreenAction } from '../../store/actions/returnToStartScreen';
import styles from './ReturnToStartScreenBtn.module.css';
import { Link } from 'react-router-dom';

const ReturnToStartScreenBtn = () => {
  const dispatch = useDispatch();

  const returnToStartScreen = () => dispatch(returnToStartScreenAction());

  return (
      <Link to={'/'} className={styles.button} onClick={returnToStartScreen}>Back to menu</Link>
  );
};

export default ReturnToStartScreenBtn;