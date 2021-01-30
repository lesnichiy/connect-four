import React from 'react';
import styles from './Timer.module.css';

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: 0
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
        () => this.tick(),
        1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick = () => {
    this.setState({
      time: this.state.time + 1
    });
  };


  render() {

    const min = Math.floor(this.state.time / 60);
    const sec = this.state.time % 60;

    const addZero = (num) => {
      return ((parseInt(num, 10) < 10) ? '0' : '') + num;
    };

    return (
        <div className={styles.time}>Time: {addZero(min)}:{addZero(sec)}</div>
    );
  }
}

export default Timer;