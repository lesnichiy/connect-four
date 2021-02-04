import styles from './App.module.css';
import StartScreen from '../StartScreen/StartScreen';
import { Switch, Route } from 'react-router-dom';
import Game from '../Game';
import Settings from '../Settings';
import BestScores from '../BestScores';
import LastFact from '../LastFact';

const App = () => {

  return (
    <div className={styles.appWrapper}>
      <Switch>
        <Route exact path={'/'} component={StartScreen} />
        <Route path={'/game'} component={Game} />
        <Route path={'/settings'} component={Settings} />
        <Route path={'/bestscores'} component={BestScores} />
        <Route path={'/lastfact'} component={LastFact} />
      </Switch>
    </div>
  );
};

export default App;
