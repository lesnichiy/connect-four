import React from 'react';
import styles from './Timer.module.css';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import store from '../../store/store';
import { stopTimerAction } from '../../store/actions/stopTimer';
import { addZero } from '../../utils/addZero';

function Timer() {

  const state = store.getState();
  const { isGameOver } = state.appNavigation;
  const dispatch = useDispatch();

  const [ time, setTime ] = useState(0);

  useEffect(() => {
    if (isGameOver) return;
    const timerID = setInterval(
        () => setTime(time + 1),
        1000
    );
    return () => clearInterval(timerID);
  });

  useEffect(() => {
    dispatch(stopTimerAction(time));
  }, [isGameOver]);

  const min = Math.floor(time / 60);
  const sec = time % 60;

  return (
      <div className={styles.time}>Time: {addZero(min)}:{addZero(sec)}</div>
  );
}

export default Timer;