import logo from '../../assets/img/logo.png';
import styles from './Header.module.css';

const Header = () => {
  return (
      <div className={styles.wrapper}>
        <img src={logo}
             alt={'Connect Four logo'}
             width={80}
             height={80}
             className={styles.logo}
        />
        <h1 className={styles.title}>Connect Four</h1>
      </div>
  );
};

export default Header;