import styles from './App.module.css';
import StartScreen from '../StartScreen/StartScreen';
import { Switch, Route } from 'react-router-dom';
import Game from '../Game';
import Settings from '../Settings';
import BestScores from '../BestScores';
import logo from '../../assets/img/logo.png';

function App() {

  return (
    <div className={styles.appWrapper}>
      <div className={styles.appHeader}>
        <img src={logo}
             alt={'Connect Four logo'}
             width={80}
             height={80}
             className={styles.logo}
        />
        <h1 className={styles.title}>Connect Four</h1>
      </div>
      <Switch>
        <Route exact path={'/'} component={StartScreen} />
        <Route path={'/game'} component={Game} />
        <Route path={'/settings'} component={Settings} />
        <Route path={'/bestscores'} component={BestScores} />
      </Switch>
    </div>
  );
}

export default App;
