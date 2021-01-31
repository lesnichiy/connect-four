import React from 'react';
import styles from './Timer.module.css';
import { useState, useEffect } from 'react';
import store from '../../store/store';

function Timer(props) {

  const state = store.getState();
  const { isGameOver } = state.appNavigation;

  const [ time, setTime ] = useState(0);

  useEffect(() => {
    if (isGameOver) return;
    const timerID = setInterval(
        () => setTime(time + 1),
        1000
    );
    return () => clearInterval(timerID);
  });

  const min = Math.floor(time / 60);
  const sec = time % 60;

  const addZero = (num) => {
    return ((parseInt(num, 10) < 10) ? '0' : '') + num;
  };

  return (
      <div className={styles.time}>Time: {addZero(min)}:{addZero(sec)}</div>
  );
}

export default Timer;