import styles from './Settings.module.css';
import ReturnToStartScreenBtn from '../ReturnToStartScreenBtn'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveSettingsAction } from '../../store/actions/saveSettings';
import store from '../../store/store'

function Settings() {

  const dispatch = useDispatch();

  const state = store.getState();
  const { settings } = state;

  const [ redPlayerName, setRedPlayerName] = useState(settings.playerRedName);
  const [ yellowPlayerName, setYellowPlayerName] = useState(settings.playerYellowName);

  const changePlayerName = (e) => {
    if (e.target.id === 'red') setRedPlayerName(e.target.value);
    if (e.target.id === 'yellow') setYellowPlayerName(e.target.value);
  };

  const saveSettings = () => dispatch(saveSettingsAction(redPlayerName, yellowPlayerName));

  return (
      <div className={styles.wrapper}>
        <div className={styles.navWrapper}>
          <ReturnToStartScreenBtn/>
        </div>
        <div className={styles.contentWrapper}>
          <h2 className={styles.title}>Settings</h2>
          <div>
            <div>
              <label className={styles.label}>
                <span>Player</span>
                <div className={[styles.chip, styles.red].join(' ')}></div>
                <span>name:</span>
                <input id={'red'}
                       type={'text'}
                       value={redPlayerName}
                       className={styles.input}
                       onChange={changePlayerName}/></label>
            </div>
            <div>
              <label className={styles.label}>
                <span>Player</span>
                <div className={[styles.chip, styles.yellow].join(' ')}></div>
                <span>name:</span>
                <input id={'yellow'}
                       type={'text'}
                       className={styles.input}
                       value={yellowPlayerName}
                       onChange={changePlayerName}/>
              </label>
            </div>
          </div>
          <button className={styles.button} onClick={saveSettings}>Save settings</button>
        </div>
      </div>
  );
}

export default Settings;